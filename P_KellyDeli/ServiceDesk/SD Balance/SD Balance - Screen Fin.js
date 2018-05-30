var previous_answer = (RMPApplication.get("last_level_value") == "yes") ? true : false;
switch (RMPApplication.get("last_level_variable")) {
	case "launch" :
		id_question_1.setVisible(previous_answer);
		break;
	case "level_1" :
		id_question_2.setVisible(previous_answer);
		break;
	case "level_2" :
		id_question_3.setVisible(previous_answer);
		break;
}