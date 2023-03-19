const command_title_element = document.getElementById("command_title");
const command_output_element = document.getElementById("command_text");

window.commandTransfer.receive('fromMain', function (data){
    data.op_result['rawHTML'].rawHTML = data.op_result['rawHTML'].rawHTML.replace(/\t/g, '&emsp');
    data.op_result['rawHTML'].rawHTML = data.op_result['rawHTML'].rawHTML.replace(/\n/g, '<br>');
    command_title_element.innerHTML = "Executed Command: " + data.operation;
    command_output_element.innerHTML = data.op_result['rawHTML'].rawHTML;

    console.log(data.op_result['rawHTML'].rawHTML);
});
