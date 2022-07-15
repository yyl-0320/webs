### git 常用命令

touch 创建
git init 创建仓库
git status 查看状态
git add .  全部到缓存区
git commit -m “注释”
git log    查看仓库
git-log    间接查看
git reset --hard commitID  回退
git reflog     操作记录
git branch   查看分支
git branch 名字
git checkout 名字  切换分之
git checkout -b  创建并切换
git merge 名字   合并分之
git branch -d b1 检查删除
git branch -D b1 强制删除
ssh-keygen -t rsa   创建ssh
cat ～/.ssh/id_rsa.pub 查看ssh
ssh -T git@gitee.com 查看链接的ssh	<br>git remote add 仓库名字（origin） 地址   链接仓库	<br>git remote rm 仓库名称<br>git remote    查看链接的仓库
git push -f --set-upstream 远端仓库 本地分支名:远端分支名      可以简化后面三个        -f:强制推送  --set-upstream :链接远端分支
git branch -vv 查看链接的远端分支
git clone ssh地址 本地目录
git fetch 《remote name》 《branch name》
git pull 《remote name》 《branch name》

仓库地址 git@gitee.com:yyl1546139844/yyl.git