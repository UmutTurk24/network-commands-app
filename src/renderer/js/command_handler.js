const command_title_element = document.getElementById("command_title");
const command_output_element = document.getElementById("command_text");

window.commandTransfer.receive('fromMain', function (data){
    console.log(data.op_result);
    command_title_element.innerHTML = data.operation;
    command_output_element.innerHTML = data.op_result;
});
