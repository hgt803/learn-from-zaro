# Git

​	[教程原文](https://juejin.cn/post/6844904191308070919)

![img](https://cdn.jsdelivr.net/gh/hgt803/picgo@main/2022_05_10_22_41_23_1652193683_1652193683859_KYIbOz_172bae45bf450595~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp)

## 创建 新的git仓库 及 克隆远程库

- 初始化新文件夹： `git init`
  - ![image-20220510230752481](https://cdn.jsdelivr.net/gh/hgt803/picgo@main/2022_05_10_23_07_52_1652195272_1652195272659_Z1n2JC_image-20220510230752481.png)

- 克隆远程仓库：`git clone`
  - Eg: `git clone https://github.com/hgt803/git-demo.git`
  - 重命名克隆到本地的文件夹名称
  - Eg:`https://github.com/hgt803/git-demo.git newDirName`
    - ![image-20220510230902904](https://cdn.jsdelivr.net/gh/hgt803/picgo@main/2022_05_10_23_09_03_1652195343_1652195343121_MWYVJy_image-20220510230902904.png)

## 从远程仓库拉最新代码到本地分支

- 拉最新代码：`git pull`

## 分支的展示和切换

- 列出所有本地分支: `git branch`

- 创建一个分支：`git branch 分支名称`
	- （仍然停留在原来的分支）
	
- 切换到指定分支`git checkout+分支名称`/`git switch+分支名称` 

- 删除本地分支：`git branch -d 分支名称`

  - PS(解决报错):

    - 执行`git fetch`将远程主机的最新内容拉到本地，再执行切换分支指令即可。

    - 【重点】保存和恢复进度：`git stash`
      - 当前分支未完成开发或者测试，需要切换分支，这个时候，使用git stash指令保存当前的修改，方便在切回当前分支时保存当前进度。


## 从本地分支提交代码到暂存区Index

- 添加指定文件到Index区：`git add 文件名称`
- 将当前目录下所有改动过的文件添加到Index区：`git add .`
- 添加指定目录到Index区：`git add 目录名称`
  - ps:把修改的文件提交到暂存区Index以后，可以通过git diff指令查看暂存区和工作区（即开发分支）的差异。

## 暂存区修改提交到本地仓库

- 将Index区内容提交到本地仓库：`git commit -m "说明信息"`
- 将Index区指定文件提交到本地仓库：`git commit 指定文件 -m ”说明信息“`
- 使用一次新的commit，代替上一次提交：`git commit --amend -m ”说明信息“`
  - ps：将修改提交到本地开发分支以后，可以通过`git status`和`git log`指令查看提交内容。
  - git commit [提交规范](https://zhuanlan.zhihu.com/p/90281637)【每个公司规定不一样】
    - feat: 新功能、新特性
    - fix: 修改 bug
    - perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
    - refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
    - docs: 文档修改
    - style: 代码格式修改, 注意不是 css 修改（例如分号修改）
    - test: 测试用例新增、修改
    - build: 影响项目构建或依赖项修改
    - revert: 恢复上一次提交
    - ci: 持续集成相关文件修改
    - chore: 其他修改（不在上述类型中的修改）
    - release: 发布新版本
    - workflow: 工作流相关文件修改

## *【重点】将本地开发分支合并到远程master主分支

- 实际开发中，可能会从master分支中切出来一个分支，在这个分支上进行开发，开发完成之后，merge到master分支，这是把开发代码和本地代码的合并，合并之后push到远程仓库；

  ​	1、在merge之前先拉一下远程仓库的最新代码：`git fetch`

  ​	2、合并指定分支到当前分支：`git merge 分支名称 `

  ​        Eg: 在a分支完成一个功能，切换到master，执行这个指令git merge a，将a分支合到master

  ## 合并代码时，可能要解决冲突

  - merge之后，很可能出现冲突conflict，这个时候就要手动解决冲突（产生冲突的原因可能是两个人对同一个文件的同一段代码做了修改，后一个人提交时，提示有冲突）。
  - 如何解决冲突？在merge时，会提示conflict的内容，在当前分支（master）上对找到冲突的文件，直接修改冲突，再次add，commit，merge

  ## 上传本地仓库分支到远程仓库分支，实现同步

  - 上传本地指定分支到远程仓库：`git push origin 本地分支（master或者其他任意分支）`
  - 推送所有分支到远程仓库：`git push [remote] --all`
  - ![image-20220512222158322](https://cdn.jsdelivr.net/gh/hgt803/picgo@main/2022_05_12_22_21_58_1652365318_1652365318575_uy8ih7_image-20220512222158322.png)

# 【重点】提交回滚（revert）、重置到某分支（reset）

- [教程](https://blog.csdn.net/yxlshk/article/details/79944535)
- 回滚：`git revert` 对某次提交进行反向操作，并与最新的提交进行合并成为一个新的 commit
- 重置：`git reset` 丢弃某版本后的所有提交，并把当前HEAD指向目的版本（commit id）

# Vim 的基本使用

- `i`：进入编辑模式
- `esc`：退出编辑模式
- `:`：进入功能键模式
- `:wq`：功能->保存并退出
- `:q`：普通退出（未做修改）
- `:!q`：强制退出（修改过，不保留修改）
