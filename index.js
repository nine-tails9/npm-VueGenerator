const fs = require("fs");
var Tname = "booking";
var maping = {
    'String': `     <Ttextinput id = "${Tname}text"></Ttextinput>`,
    'Email': `      <Temail id= "${Tname}email"></Temail>`,
    'Number': `     <Tnumber id= "${Tname}number"></Tnumber>`,
    'Phone': `      <Tphone id= "${Tname}phone"></Tphone>`,
    'Textarea': `       <Ttextarea id= "${Tname}area"></Ttextarea>`,
};
var temp = [

    {
        name: "Name",
        type: "String"
    },
    {
        name: "Email",
        type: "Email"
    },
    {
        name: "Number",
        type: "Number"
    },
    {
        name: "Phone",
        type: "Phone"
    },


];
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
var Template = `<template>
    <div id = "${Tname}" v-cloak>`;
for (let i of temp) {
    Template += '\n' + maping[i.type] + '\n';
}
Template += '</div>\n</template>';
var final = Template + foot;

function generateFile() {

    fs.writeFile(Tname + '.vue', final, (err) => {
        if (err) throw err;
    });
}

generateFile();
// module.exports = generateFile;