
const path = require('path')
const fs = require('fs')

// 黑名单
const blacklist = ['node_modules', '.editorconfig', '.git', '.gitignore', '.prettierignore', 
'.prettierrc', '.umi', 'cfgs', 'layouts', 'models', 'pages', 'services', 'styles', 'app.js',
'global.js', '.husky', 'config', 'public', 'commitlint.config.js', 'jsconfig.json',
'package.json', 'README.md', 'refresh.js', 'copy.js']

function _copy (src, dist) {
  // 读目录内容
  fs.readdir(src, (err, paths) => {
    if (err) return false

    paths.forEach(filePath => {
      if (blacklist.includes(filePath)) return false

      const _src = path.join(src, filePath)
      const _dist = path.join(dist, filePath)

      // 读文件 || 目录 信息
      fs.stat(_src, (err, stat) => {
        if (err) return false

        // 文件
        if(stat.isFile()) {
          fs.writeFileSync(_dist, fs.readFileSync(_src))

        // 目录 递归
        } else if(stat.isDirectory()) {
          copy(_src, _dist)
        }
      })
    })
  })
}

function copy (src, dist) {
  fs.access(dist, err => {
    // 目录不存在 创建目录
    if (err) fs.mkdirSync(dist)
    // 拷贝目录
    _copy(src, dist)
  })
}

copy(
  path.join(__dirname, 'src'), 
  path.join(__dirname, path.normalize('../qfyw'))
)
