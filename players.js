// using npm package inquirer
var inquirer = require('inquirer');

//constructor function for creating the player objects
function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    //creating a method that will give us a 50/50 chance for this.offense to go up by one

    this.goodGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense++;
            console.log(this.name + "'s offense has gone up!\n----------");
        } else {
            this.defense++;
            console.log(this.name + "'s defense has gone up!\n------------");
        }
    };
    this.badGame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense--;
            console.log(this.name + "'s offense has gone down!\n---------");
        } else {
            this.defense--;
            console.log(this.name + "'s defense has gone down!\n-------");
        }
    };
    this.printStats = function () {
        console.log("Name; " + this.name + "\nPosition: " + this.position + "\nOffense: " + this.offense +
            "\nDefense: " + this.defense + "\n--------");
    };
}