#Followed below articles for workspace creation
1) https://www.tektutorialshub.com/angular/angular-multiple-apps-in-one-project/
2) https://octoperf.com/blog/2019/08/22/kraken-angular-workspace-multi-application-project/
3) https://gc-codes.com/angular/2020/02/working-with-multiple-angular-modules-and-module-routing/


#One time Project setup can be done by running below commands
npm install
npm install bootstrap@next popper.js --S
npm i --save @angular/cdk@10.2.0 @angular/material@10.2.0



#Components can be generated like below
ng generate component GlobalProfile --style=css --project=Shared

ng generate component SalaryHome\Home --style=css --project=Salary
ng generate component MonthlySalary\MonthlySalaryParent --style=css --project=Salary



#Appliocation IIS build using for Dev
ng build --base-href "/SPADev1/" --prod --project="Shared"
ng build --base-href "/SPADev1/Salary/" --prod --project="Salary"
ng build --base-href "/SPADev1/AccessRights/" --prod --project="AccessRights"
ng build --base-href "/SPADev1/EmployeeMaster/" --prod --project="EmployeeMaster"
ng build --base-href "/SPADev1/ESS/" --prod --project="ESS"



#Application can be server user below commands
ng serve --open --project=ShortestPath --port=4200

ng serve --open --project=Shared --port=4200
ng serve --open --project=Salary --port=4201 --baseHref /Salary/
ng serve --open --project=AccessRights --port=4202 --baseHref /AccessRights/
ng serve --open --project=ESS --port=4203 --baseHref /ESS/
ng serve --open --project=EmployeeMaster --port=4203 --baseHref /EmployeeMaster/


------------------- PROJECT SETUP INFOMATION STARTS ----------------------------------

#Angular Material can be added to each project like below
ng add @angular/material --project=Salary
ng add @angular/material --project=AccessRights
ng add @angular/material --project=ESS
ng add @angular/material --project=EmployeeMaster




#Services Can be created using below commands
ng generate service SalaryServices --project=Salary
ng generate service AccessRightsServices --project=AccessRights
ng generate service EmployeeMasterServices --project=EmployeeMaster
ng generate service ESSServices --project=ESS
ng generate service SharedServices --project=Shared



#Installing Bootstrap
npm install bootstrap@next popper.js --project="Shared" --S
npm install bootstrap@next popper.js --project="Salary" --S
npm install bootstrap@next popper.js --project="AccessRights" --S
npm install bootstrap@next popper.js --project="EmployeeMaster" --S
npm install bootstrap@next popper.js --project="ESS" --S


-------------------------- Git Commands------------------

…or create a new repository on the command line
echo "# alogs" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sushanm/alogs.git
git push -u origin main


…or push an existing repository from the command line
git remote add origin https://github.com/sushanm/alogs.git
git branch -M main
git push -u origin main




git config --global user.email "sushan.m@gmail.com"
git config --global user.name "sushanm"

