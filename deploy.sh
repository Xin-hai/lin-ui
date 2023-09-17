#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
yarn build

# cd 到构建输出的目录下
cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到github 此两行为注释
git push -f git@github.com:Xin-hai/lin-ui.git master:gh-pages

# 部署到gitee 下面这行正常运行
#git push -f git@gitee.com:ZXInhai/lin-ui.git master:gh-pages

# 回到之前的那一层目录
cd -

echo https://xin-hai.github.io/lin-ui/index.html