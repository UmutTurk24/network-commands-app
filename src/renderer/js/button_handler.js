var command_list = [
    "ifconfig", "traceroute", "ping",
    "netstat", "whoami", "placeholder","placeholder",
    "placeholder", "placeholder", "placeholder", 
    "placeholder","go back"
];

setup_button_events();

/** 
 * Event initializer
 * Initializes the button functionalities on the page
 */
function setup_button_events() {
    // Base-string for the button ids
    var button_id_base = "button";
    // Add an event listener to every button
    for (let i = 0; i < command_list.length; i++) {
        const button_element = document.getElementById(button_id_base+(i+1).toString());
        button_element.innerHTML = command_list[i];
        // button_element.addEventListener("click", function () {
        //     move_screen_options(command_list[i]);
        // })
        button_element.onclick = function() {
            move_screen_options(command_list[i]);
        }
    }


}

/** 
 * Updates the button names with the available commands
 * @param command_name String. Name of the command being called
 */
function move_screen_options(command_name){
    // Clear the content of every button and old event listener
    var button_id_base = "button";
    for (let i = 0; i < command_list.length; i++) {
        const button_element = document.getElementById(button_id_base+(i+1).toString());
        button_element.innerHTML = "";
        button_element.onclick = function() {};
    }

    // Retrieve the options and update the button instructions
    op_set = get_options(command_name);
    add_options(command_name, op_set);
}

/** 
 * Retrieves the options for commands
 * @param command_name String. Name of the command being called
 */
function get_options(command_name){
    var option_set = []

    switch (command_name) {
        case "ifconfig": {
            option_set.push("a");
            option_set.push("l");
            option_set.push("L");
            option_set.push("r");
            option_set.push("No Option");
            break;
        }
        case "traceroute": {
            option_set.push("a");
            option_set.push("d");
            option_set.push("n");
            option_set.push("r");
            option_set.push("No Option");
            break;
        }
        case "ping": {
            option_set.push("D");
            option_set.push("f");
            option_set.push("o");
            option_set.push("r");
            option_set.push("No Option");
            break;
        } 
        case "netstat": {
            option_set.push("a");
            option_set.push("b");
            option_set.push("d");
            option_set.push("l");
            option_set.push("r");
            option_set.push("s");
            option_set.push("v");
            option_set.push("No Option");
            break;
        }
        case "whoami": {
            option_set.push("No Option");
            break;
        }
        default: {
            break;
        }
    }
    return option_set;
}

/** 
 * Retrieves the options for commands
 * @param command_name String. Name of the command being called
 */
function add_options(operation_name, operation_set ) {
    var button_id_base = "button";
    for (let i = 0; i < operation_set.length; i++) {
        // Update the button texts to show the options list
        const button_element = document.getElementById(button_id_base+(i+1).toString());
        button_element.innerHTML = "-" + operation_set[i];
        const command_option = button_element.innerHTML;

        // Wait until the user selects an option
        button_element.onclick = function() {
            run_command(operation_name, command_option);
            button_element.onclick = function() {};
        }
    }
}

/** 
 * Send the command to the main for further processing  
 * @param operation_name String. Name of the command being called
 * @param operation_option String. Option of the command being called
 */
function run_command(operation_name, operation_option) {
    window.commandTransfer.send('toMain', {
        operation_name,
        operation_option
    });
}

/** 
 * Receives the loading screen update from the main
 */
window.commandTransfer.receive('fromMain', function (data) {
    if(data == "start-loading") {
        // Create Loading Screen Children
        const loader_parent = document.getElementById("splitter");

        var loader_div = document.createElement('div');
        loader_div.className = "loader rmloader";
        loader_parent.appendChild(loader_div);

        var loader_div2 = document.createElement('div');
        loader_div2.className = "loader-inner loading rmloader";
        loader_div.appendChild(loader_div2);

        var loader_div3 = document.createElement('div');
        loader_div3.className = "loading-box rmloader";
        loader_div2.appendChild(loader_div3);
        // Create Loading Screen Siblings
        var loader_div4 = document.createElement('div');
        loader_div4.className = "circular-loader rmloader";
        loader_div3.appendChild(loader_div4);
        
        var loader_div5 = document.createElement('div');
        loader_div5.className = "error-cross rmloader";
        loader_div3.appendChild(loader_div5);

        var loader_div6 = document.createElement('div');
        loader_div6.className = "loader-message rmloader";
        loader_div6.innerHTML = "Executing your command...";
        loader_div3.appendChild(loader_div6);
    }

    if(data == "end-loading") {
        var to_be_removed = document.getElementsByClassName("rmloader");
        console.log(to_be_removed.length);
        for(var i = 0; i < to_be_removed.length; i++) {
            to_be_removed[i].remove();
        }   
    }
});