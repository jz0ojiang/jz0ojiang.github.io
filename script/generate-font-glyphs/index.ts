import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';
import Fontmin from 'fontmin';

async function getAllText(): Promise<string> {
  // 获取所有.vue, .ts, .js, .html, .md文件
  const files = await glob('src/**/*.{vue,ts,js,html,md}');
  let allText = '';

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    allText += content;
  }

  // 去重并返回
  return Array.from(new Set(allText.split(''))).join('');
}

async function subsetFont(text: string) {
  const sourceDir = path.join(process.cwd(), 'source');
  const targetDir = path.join(process.cwd(), 'public/fonts');

  // 确保目标目录存在
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 获取source目录下的所有字体文件
  const fontFiles = await glob('*.{ttf,otf}', { cwd: sourceDir });

  for (const fontFile of fontFiles) {
    const fontmin = new Fontmin()
      .src(path.join(sourceDir, fontFile))
      .dest(targetDir)
      .use(Fontmin.glyph({ text }))
      .use(Fontmin.ttf2woff2());

    await new Promise((resolve, reject) => {
      fontmin.run((err, files) => {
        if (err) {
          reject(err);
        } else {
          resolve(files);
        }
      });
    });

    console.log(`处理完成: ${fontFile}`);
  }
}

async function main() {
  try {
    console.log('开始提取文本...');
    const text = await getAllText();
    console.log(`提取的文本字符数: ${text.length}`);

    console.log('开始处理字体...');
    await subsetFont(text);
    console.log('所有字体处理完成！');
  } catch (error) {
    console.error('发生错误:', error);
    process.exit(1);
  }
}

main();
