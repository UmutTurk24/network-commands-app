var command_list = [
    "ifconfig", "ping", "hostname",
    "netstat", "whoami", "ls", "whois",
    "dig", "host", "pwd", 
    " ", " "
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
        button_element.onmouseover = function () {
            const description_info = command_descriptor(command_list[i]);
            display_descriptor(description_info, button_element);
        }
        button_element.onmouseleave = function () {
            remove_descriptor(button_element);
        }
        button_element.onclick = function() {
            move_screen_options(command_list[i]);
        }
    }
}

/** 
 * Removes the description of the button
 * @param c_button Element (button). Current button to be processed
 */
function remove_descriptor(c_button) {
    var to_be_removed = document.getElementsByClassName("descriptor");
    for(var i = 0; i < to_be_removed.length; i++) {
        to_be_removed[i].remove();
    }   
}

/** 
 * Displays the button description for the command
 * @param description_info String. Description of the command
 * @param c_button Element (button). Current button to be processed
 */
function display_descriptor(description_info, c_button) {
    
    var description_container = document.createElement('div');
    description_container.className = "description-box descriptor";
    
    var desciption_tag = document.createElement('p');
    desciption_tag.className = "tooltip-text descriptor";
    desciption_tag.innerHTML = description_info;
    
    buttons_parent = c_button.parentElement;
    buttons_parent.appendChild(description_container);
    description_container.appendChild(desciption_tag);
    desciption_tag.style.display = "block";
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
        button_element.onmouseleave = function () {};
        button_element.onmouseover = function () {};
    } 

    // Retrieve the options and update the button instructions
    op_set = get_options(command_name);
    add_options(command_name, op_set);
}


/** 
 * Matches the given command_name with its description 
 * @param command_name String. Name of the command being called
 */
function command_descriptor(command_name) {
    var command_description = "";
    switch (command_name) {
        case "ifconfig": {
            command_description = "configure network interface parameters";
            break;
        }
        case "traceroute": {
            command_description = "print the route packets take to network host";
            break;
        }
        case "ping": {
            command_description = "send ICMP ECHO_REQUEST packets to network hosts";
            break;
        } 
        case "netstat": {
            command_description = "show network status";
            break;
        }
        case "whoami": {
            command_description = "display the current user"
            break;
        }
        case "hostname": {
            command_description = "print name of the current host system"
            break;
        }
        case "dig": {
            command_description = "DNS lookup utility"
            break;
        }
        case "host": {
            command_description = "DNS lookup utility"
            break;
        }
        case "pwd": {
            command_description = "return working directory name"
            break;
        }
        case "ls": {
            command_description = "list directory contents"
            break;
        }
        case "arp": {
            command_description = "address resolution display and control"
            break;
        }
        case "arp": {
            command_description = "address resolution display and control"
            break;
        }
        case "whois": {
            command_description = "Internet domain name and network number directory service"
            break;
        }
        default: {
            break;
        }
    }
    return command_description;
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
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        }
        case "traceroute": {
            option_set.push("a");
            option_set.push("d");
            option_set.push("n");
            option_set.push("r");
            option_set.push("No Option");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        }
        case "ping": {
            option_set.push("D");
            // option_set.push("f");
            option_set.push("o");
            // option_set.push("r");
            option_set.push("No Option");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        } 
        case "netstat": {
            option_set.push("a");
            option_set.push("b");
            option_set.push("d");
            // option_set.push("l");
            // option_set.push("r");
            option_set.push("s");
            option_set.push("v");
            option_set.push("No Option");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        }
        case "whoami": {
            option_set.push("No Option");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        }
        case "arp": {
            option_set.push("l"); // Show link-layer reachability information.
            option_set.push("n"); // Show network addresses as numbers (normally arp attempts to display addresses symbolically).
            option_set.push("x"); // Show extended link-layer reachability information in addition to that shown by the -l flag.
            option_set.push("No Option");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        }
        case "dig": {
            option_set.push("m"); // Enable memory usage debugging.
            option_set.push("v"); // Print the version number and exit.
            option_set.push("No Option");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        }
        case "host": {
            // option_set.push("6"); //Use IPv6 only for query transport
            // option_set.push("C"); // Check consistency: host will query the SOA records for zone name from all the listed authoritative
            // name servers for that zone.
            // option_set.push("V"); // Print the version number and exit.
            option_set.push("No Option");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        }
        case "pwd": {
            option_set.push("L"); // Display the logical current working directory.
            option_set.push("P"); // Display the physical current working directory (all symbolic links resolved).
            option_set.push("No Option");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        }
        case "ls": {
            option_set.push("a"); // Include directory entries whose names begin with a dot (‘.’).
            option_set.push("d"); // Directories are listed as plain files (not searched recursively).
            option_set.push("n"); // Display user and group IDs numerically rather than converting to a user or group name in a long
            //(-l) output.  This option turns on the -l option.
            option_set.push("o"); // List in long format, but omit the group id.
            option_set.push("s"); // Display the number of blocks used in the file system by each file.
            option_set.push("u"); // Use time of last access
            option_set.push("w"); // Force raw printing of non-printable characters. 
            option_set.push("No Option");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        }
        case "hostname": {
            option_set.push("s"); // Trim off any domain information from the printed name.
            option_set.push("d"); // Only print domain information.
            option_set.push("No Option");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        }
        case "whois": {
            option_set.push("A"); // Use the Asia/Pacific Network Information Center (APNIC) database
            option_set.push("b"); // Use the Network Abuse Clearinghouse database.
            option_set.push("g"); // Use the US non-military federal government database, which contains points of contact for subdomains of .GOV
            option_set.push("i"); // Use the traditional Network Information Center (InterNIC)
            option_set.push("No Option");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            option_set.push(" ");
            break;
        }
        default: {
            break;
        }
    }
    return option_set;
}

/** 
 * Retrieves the options for commands and sends them to the main for execution
 * @param operation_name String. Name of the command being called
 * @param operation_set String Array. Array of options available for the command
 */
function add_options(operation_name, operation_set ) {

    // Re-assign the texts in the buttons
    var button_id_base = "button";
    for (let i = 0; i < operation_set.length; i++) {
        // Update the button texts to show the options list
        const button_element = document.getElementById(button_id_base+(i+1).toString());

        // Skip over the non-functional buttons
        if (operation_set[i] != " ") {
            button_element.innerHTML = "-" + operation_set[i];
            const command_option = button_element.innerHTML;


            // Add onmouseover/onmouseleave functions on the buttons
            button_element.onmouseover = function () {
                const description_info = option_descriptor(command_option, operation_name);
                display_descriptor(description_info, button_element);
            }
            button_element.onmouseleave = function () {
                remove_descriptor(button_element);
            }

            const ca_name = modify_unique_commands(operation_name);

            // Execute the command once the user selects an option
            button_element.onclick = function() {
                remove_descriptor(button_element);
                run_command(ca_name, command_option);
                button_element.onclick = function() {};
                button_element.onmouseover = function() {};
                button_element.onmouseleave = function() {};
            }
        }
    }

    // Handle the special case of going back (reset) button
    const button_element = document.getElementById("button12");
    button_element.innerHTML = "Go Back";
    button_element.onclick = function() {
        setup_button_events();
        // button_element.onclick = function() {};
    }
}

function modify_unique_commands(c_name) {
    let new_name = c_name;
    if (new_name == "traceroute" || new_name == "ping" || new_name == "arp" || new_name == "dig" || new_name == "host" || new_name == "whois") {
        if (new_name == "ping") {
            new_name = new_name + " -c 5";
        }
        new_name = new_name + " www.google.com";
        
    }
    
    return new_name;
}

/** 
 * Matches the given command_name with its description 
 * @param c_option String. Name of the command being selected
 * @param c_name String. Name of the option of the command being selected
 */
function option_descriptor(c_option, c_name) {
    let command_description = "";
    switch (c_name) {
        case "ifconfig": {
            switch (c_option) {
                case "-L": {
                    command_description = "address filetime is displayed for IPv6 addresses";
                    break
                }
                case "-a": {
                    command_description = "all interfaces in the system";
                    break
                }
                case "-l": {
                    command_description = "list all available interfaces on the system with no additional information";
                    break
                }
                case "-r": {
                    command_description = "additional information related to the count of route references on the network interface";
                    break
                }
                default: {
                    break
                }
            }
            break;
        }
        case "traceroute": {
            switch (c_option) {
                case "-a": {
                    command_description = "turn on AS# lookups for each hop encountered";
                    break
                }
                case "-d": {
                    command_description = "enable socket level debugging";
                    break
                }
                case "-n": {
                    command_description = "print hop addresses nimerically rather than symbolically";
                    break
                }
                case "-r": {
                    command_description = "bypass the normal routing tables and send directly to a host on an attached network";
                    break
                }
                default: {
                    break
                }
            }
            break;
        }
        case "ping": {
            switch (c_option) {
                case "-D": {
                    command_description = "set the Don't Fragment bit";
                    break
                }
                case "-f": {
                    command_description = "Flood ping. It can be used to see how many packets are being dropped. WARNING: It can be hard on the network, use with caution";
                    break
                }
                case "-o": {
                    command_description = "exit successfully after receiving one reply packet";
                    break
                }
                case "-r": {
                    command_description = "bypass the normal routing tables and send directly to a host on an attached network";
                    break
                }
                default: {
                    break
                }
            }
            break;
        } 
        case "netstat": {
            switch (c_option) {
                case "-a": {
                    command_description = "with the default display, show the state of all sockets";
                    break
                }
                case "-b": {
                    command_description = "with the interface display (option -i), show the number of bytes in and out";
                    break
                }
                case "-d": {
                    command_description = "with either interface display";
                    break
                }
                case "-l": {
                    command_description = "print full IPv6 address";
                    break
                }
                case "-r": {
                    command_description = "show the routing tables";
                    break
                }
                case "-s": {
                    command_description = "show per-protocol statistics";
                    break
                }
                case "-v": {
                    command_description = "increase verbosity level";
                    break
                }
                default: {
                    break
                }
            }
            break;
        }
        case "whoami": {
            
            break;
        }
        case "ls": {
            switch (c_option) {
                case "-a": {
                    command_description = "Include directory entries whose names begin with a dot";
                    break
                }
                case "-d": {
                    command_description = "Directories are listed as plain files (not searched recursively).";
                    break
                }
                case "-n": {
                    command_description = "Display user and group IDs numerically rather than converting to a user or group name in a long(-l) output.  This option turns on the -l option.";
                    break
                }
                case "-o": {
                    command_description = "List in long format, but omit the group id.";
                    break
                }
                case "-s": {
                    command_description = "Display the number of blocks used in the file system by each file.";
                    break
                }
                case "-u": {
                    command_description = "Use time of last access";
                    break
                }
                case "-w": {
                    command_description = "Force raw printing of non-printable characters";
                    break
                }
                default: {
                    break
                }
            }
            break;
        }
        case "hostname": {
            switch (c_option) {
                case "-s": {
                    command_description = "Trim off any domain information from the printed name";
                    break
                }
                case "-d": {
                    command_description = "Only print domain information.";
                    break
                }
                default: {
                    break
                }
            }
            break;
        }
        case "host": {
            switch (c_option) {
                case "6": {
                    command_description = "Use IPv6 only for query transport";
                    break
                }
                case "C": {
                    command_description = "Check consistency: host will query the SOA records for zone name from all the listed authoritative name servers for that zone.";
                    break
                }
                case "V": {
                    command_description = "Print the version number and exit.";
                    break
                }
                default: {
                    break
                }
            }
            break;
        }
        case "pwd": {
            switch (c_option) {
                case "-L": {
                    command_description = "Display the logical current working directory.";
                    break
                }
                case "-P": {
                    command_description = "Display the physical current working directory (all symbolic links resolved).";
                    break
                }
                default: {
                    break
                }
            }
            break;
        }
        case "dig": {
            switch (c_option) {
                case "-L": {
                    command_description = "address filetime is displayed for IPv6 addresses";
                    break
                }
                case "-a": {
                    command_description = "all interfaces in the system";
                    break
                }
                case "-l": {
                    command_description = "list all available interfaces on the system with no additional information";
                    break
                }
                case "-r": {
                    command_description = "additional information related to the count of route references on the network interface";
                    break
                }
                default: {
                    break
                }
            }
            break;
        }
        case "whois": {
            switch (c_option) {
                case "-A": {
                    command_description = "Use the Asia/Pacific Network Information Center (APNIC) database";
                    break
                }
                case "-b": {
                    command_description = "Use the Network Abuse Clearinghouse database.";
                    break
                }
                case "-g": {
                    command_description = "Use the US non-military federal government database";
                    break
                }
                case "-i": {
                    command_description = "Use the traditional Network Information Center (InterNIC) ";
                    break
                }
                default: {
                    break
                }
            }
            break;
        }
        case "arp": {
            switch (c_option) {
                case "-l": {
                    command_description = "Show link-layer reachability information.";
                    break
                }
                case "-n": {
                    command_description = "Show network addresses as numbers (normally arp attempts to display addresses symbolically).";
                    break
                }
                case "-x": {
                    command_description = "Show extended link-layer reachability information in addition to that shown by the -l flag.";
                    break
                }
                default: {
                    break
                }
            }
            break;
        }
        default: {
            break;
        }
    }
    return command_description
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
 * Receives the loading screen updates (start-loading or end-loading) from the main
 */
window.commandTransfer.receive('fromMain', function (data) {
    // Create the loading screen if the command is executing
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

    // Remove the loading screen once the command is ready to be displayed
    if(data == "end-loading") {
        var to_be_removed = document.getElementsByClassName("rmloader");
        for(var i = 0; i < to_be_removed.length; i++) {
            to_be_removed[i].remove();
        }   
    }
});