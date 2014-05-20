<?php

	//Definition of variables
	$hostname = 'localhost';
	$username = 'root';
	$database_name = 'portofino_newsletter';
	$password = "pa140295";
	$emails_table = "newsroom_emails";


	$con = mysql_connect($hostname, $username, $password) or die('Could not connect: '. mysql_error());
	
	mysql_select_db($database_name, $con);
	
	if(mysql_query("INSERT INTO $emails_table (fullname, email) VALUES (".$_POST['fullname'].", ".$_POST['email'].")")){
		echo "Your email has been added to the list";
	}
	else{
		echo "There was an error adding your email to our list. Please try again.";
	}
	
	mysql_close($con);

?>