//const { Given, When, Then } = require("cucumber");
'use strict';

const { Given, When, Then } = require('cucumber');
// const CareerPage = require('../po/careerPage.js');
// const careerPage = new CareerPage();
const careerPage = require('../constants/careerPage.json');
//setDefaultTimeout(GLOBAL_TIMEOUT);

Given (/^the EPAM Career Page is opened$/, function (){
    //return careerPage.load();
    return "pending"
});


When (/^the Cookie Policy is accepted$/, function (){
    //return careerPage.acceptCookie();
    return "pending"
});

When (/^"(.*)" and "(.*)" is selected in the "Location filter box"$/, async function (country, city){
    //return await careerPage.selectCityInCountry(country, city);
    return "pending"
});

When (/^"(.*)" is selected in the "Skills filter box"$/, function (skill){
   // return careerPage.selectSkill(skill);
   return "pending"
});

When (/^the "Search button" is clicked$/, function (){
   // return careerPage.jobSearchButton.click();
    return "pending"
});

When (/^the "Apply button of the position" is clicked$/, function (){
   // return careerPage.jobViewAndApplyButton.click();
   return "pending"
});


Then (/^the "Search form" should be visible$/, function (){
   // return expect(careerPage.jobSearchFilterForm.isDisplayed()).to.eventually.be.true;
   return "pending"
});

Then (/^the "Location filter box" should contain "(.*)"$/, async function (city){
   // return expect(await careerPage.getSelectedCity()).to.equal(city);
   return "pending"
});

Then (/^the "Skills filter box" should contain "Skills Counter"$/, async function (){
   // return expect(await careerPage.getSelectedSkill()).to.equal('1');
   return "pending"
});

Then (/^the "Search form" should contain "(.*)" tag$/, async function (skill){
   // return expect( await careerPage.getSelectedSkillTag()).to.equal(skill.toUpperCase());
   return "pending"
});

Then (/^the "Search Result List" should be visible$/, function (){
   // return expect(careerPage.searchResult.isPresent()).to.eventually.be.true;
   return "pending"
});

Then (/^the "(.*)" position should be visible$/, async function (positionName){
   // const positionOfJob = await careerPage.getPositionOfJob();
   // return expect(positionOfJob.includes(positionName)).to.be.true;
   return "pending"
});

Then (/^the "location of the position" should contain "(.*)"$/, async function (city){
   // const locationOfJob = await careerPage.getLocationOfJob();
   // return expect(locationOfJob.includes(city.toUpperCase())).to.be.true;
   return "pending"
});

Then (/^the "Apply button of the position" should be displayed$/, function (){
   // return expect(careerPage.jobViewAndApplyButton.isPresent()).to.eventually.be.true;
   return "pending"
});

Then (/^the "Vacancy description" should be displayed$/, function (){
   // return expect(careerPage.vacancyDescription.isDisplayed()).to.eventually.be.true;
  return "pending"
});

Then (/^the "Vacancy description" should contain "(.*)"$/,async function (city){
   // const locationOfVacancy = await careerPage.getLocationOfVacancy();
   // return expect(locationOfVacancy.includes(city.toUpperCase())).to.be.true;
  return "pending"
});

Then (/^the "Vacancy description" should have "(.*)"$/, async function (positionName){
   // const positionOfVacancy = await careerPage.getPositionOfVacancy();
   // return expect(positionOfVacancy.includes(positionName)).to.be.true;
  return "pending"
});
