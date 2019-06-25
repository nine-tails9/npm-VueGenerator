#!/usr/bin/env node

const [, , ...args] = process.argv;
const fs = require("fs");
var Tname = args[0];
var model = require(args[1]);
var path = args[2];




//components Mappings
var maping = {
    'String': `     <Ttextinput id = "${Tname}text"></Ttextinput>`,
    'Email': `      <Temail id = "${Tname}email"></Temail>`,
    'Number': `     <Tnumber id = "${Tname}number"></Tnumber>`,
    'Phone': `      <Tphone id = "${Tname}phone"></Tphone>`,
    'Checkbox': `       <Tcheckbox id = "${Tname}box"></Tcheckbox>`,
    'Dropdown': `       <Tdropdown id = "${Tname}drop"></Tdropdown>`,
    'Searchabledropdown': `       <Tsearchabledropdown id = "${Tname}search"></Tsearchabledropdown>`,
    'Button': `       <Tbutton id = "${Tname}btn"></Tbutton>`,
    'Textarea': `       <Ttextarea id = "${Tname}area"></Ttextarea>`,

};

//template header
var Template = `<template>
    <div id = "${Tname}" v-cloak>`;
for (let i of model) {
    Template += '\n' + maping[i.type] + '\n';
}
Template += '</div>\n</template>';

//footer
var foot = `
<script>
export default {
    name: "${Tname}",
    data() {
        return {
        
        } 
    },
    methods: {
      
    }
};
</script>
<style>
</style>`;

//Final Appends
var final = Template + foot;

function generateFile() {

    fs.writeFile(path + Tname + '.vue', final, (err) => {
        if (err) throw err;
    });
}

generateFile();