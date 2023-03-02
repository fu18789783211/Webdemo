…或者在命令行上创建一个新的存储库
echo "# 10.30" >> README.md 
git init 
git add README.md 
git commit -m "first commit" 
git branch -M master 
git remote add origin git@github.com:fu18789783211/10.30.git
 git push -u origin掌握
…或从命令行推送现有存储库
git remote add origin git@github.com:fu18789783211/10.30.git
 git branch -M master 
git push -u origin master