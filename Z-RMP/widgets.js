/**
 * @ignore
   @param {Object} conf a Json Object which stores the instantiated widget configuration
 * @constructor
 */
function RMP_Component( conf ){
	if( !conf ){
		RMPApplication.throwCustomException("Missed widget configuration!");
		return;
	}
	if( RMPWidgets.didWidgetFound(conf.id) && !conf.internal && !conf.force && (!conf.index || conf.index=='-1') ){
		RMPApplication.throwCustomException(conf.id+" already exists!");
		return;
	}
	this.conf = conf;
	this.instantiated = false;
	
    RMP_Component.prototype.getConf = function(){
    	return this.conf;
    };
    /**
	 * This function returns the id as string of the widget 
	 * @returns {String}
	 */
    RMP_Component.prototype.getName = function(){
    	return this.conf.id;
    };
    /**
	 * This function returns the type of the widget(RMP_Image, RMP_Html, RMP_Scripter, RMP_StaticTextwidget, RMP_Button, RMP_TextInput, RMP_ListBox, RMP_MultiSelectionCheckBox, RMP_RadioButton, RMP_Array, RMP_FileUpload... )
	 * @returns {String}
	 */
    RMP_Component.prototype.getType = function(){
    	//it seems that the native JS Object arguments.callee.name is not supported by all browsers (IE!)
    	return "RMP_Component";
    };
    
    RMP_Component.prototype.getIndex = function(){
    	return this.conf.index;
    };
    /**
     * This function returns true if the the widget's variable is an array and false otherwise
     * @returns {boolean}
     */
    RMP_Component.prototype.isIndexed = function(){
    	return this.conf.index!=-1;
    };
    
    /** @private 
     * */
    RMP_Component.prototype.appendParameter = function( url, key, value ) {
		if( url.indexOf("?") != -1 ) url += "&";
		else url += "?";
		return url += key + "=" + value;
	};
	
	/** @private */
	RMP_Component.prototype.appendRandomParameter = function( url ) {
		return this.appendParameter( url, 'rand', ''+new Date().getTime());
	};
	
	/**
	 * 
	 * @returns {object} the parent widget of a widget
	 */
	RMP_Component.prototype.getParent = function() {
		var parentId = this.getParentWithId(this.conf.id, this.conf.index);
		return parentId ? eval( parentId ) : null;
	};
	
	/**
	 * 
	 * @returns {String} the index of the container of the widget, it might be the index of the column if the widget is in an array or the index of the tab if it's in a tab panel
	 */
	RMP_Component.prototype.getContainerIndex = function() {
		return this.getContainerIndexWithId(this.conf.id, this.conf.index);
	};
	/**
	 * @private
	 */
	RMP_Component.prototype.getElementId = function() {
    	return this.isIndexed() ?  this.conf.id+"_"+this.conf.index : this.conf.id;
	};
}
/** @private */
RMP_Component.prototype.getParentWithId = function( nameId, index ){};
/** @private */
RMP_Component.prototype.getContainerIndexWithId = function( nameId, index ){};
RMP_Component.prototype.isValid = function(checkRules){ return true;};

/**
  @ignore
  @constructor
  @extends RMP_Component
 */
function RMP_CompositeWidget( conf ){
	RMP_Component.call( this, conf );
	
	// create the corresponding GWT component if the JS component was created dynamically by end user
	if( conf && !conf.internal){
		if( !conf.index ) conf.index="-1";
		if(this.getType()!="RMP_Array" && this.getType()!="RMP_TabPanel"){
			this.instantiate(this.getType(),conf);
			this.instantiated = true;
		}
		RMPWidgets.addWidget(this);
	}
	/**
	 * This function returns the html object of the widget
	 * @returns {object}
	 */
    RMP_CompositeWidget.prototype.getElement = function(){
    	return this.getElementdWithId( this.conf.id, this.conf.index );
    };
    /**
	 * This function returns true if a widget is active and false otherwise
	 * @returns {boolean} 
	 */
    RMP_CompositeWidget.prototype.isEnabled = function(){
    	return this.isEnabledWithId( this.conf.id, this.conf.index );
    };
    /**
	 * This function allows to set a widget as active/inactive
	 * @param {boolean} 
	 */
    RMP_CompositeWidget.prototype.setEnabled = function(e){
    	this.setEnabledWithId( this.conf.id, this.conf.index, e );
    };
    /**
	 * This function returns true if the widget is active and false otherwise
	 * @returns {boolean}
	 */
    RMP_CompositeWidget.prototype.isActive = function(){
    	return this.isEnabled();
    };
    /**
     * This function allows to set the widget as active/inactive
     * @param {boolean} active
     */
    RMP_CompositeWidget.prototype.setActive = function(active){
    	this.setEnabled(active);
    };
    /**
	 * This function returns true if the widget is visible and false otherwise
	 * @returns {boolean}
	 */
    RMP_CompositeWidget.prototype.isVisible = function(){
    	return this.isVisibleWithId( this.conf.id, this.conf.index );
    };
    /**
     * This function allows to set the widget as visible/invisible
     * @param {boolean} 
     */
    RMP_CompositeWidget.prototype.setVisible = function(v){
    	this.setVisibleWithId( this.conf.id, this.conf.index, v );
    };
    /**
     * This function sets the tooltip text of the widget
     * @param {String} tooltip
     */
    RMP_CompositeWidget.prototype.setTooltip = function(tooltip){
    	this.setTooltipWithId(this.conf.id,this.conf.index,tooltip);
    };
    /**
	 * This function returns the tooltip text of the widget
	 * @returns {String}
	 */
    RMP_CompositeWidget.prototype.getTooltip = function(){
    	return this.getTooltipWithId( this.conf.id,this.conf.index );
    };
    
    /**
	 * This function allows you to insert on the right of widgetID, the new widget created thanks to new RMP_xxx() function
	 * @param {object} widget the inserted widget
	 */
    RMP_CompositeWidget.prototype.insertBefore = function(widget){
    	if( !widget.instantiated ){
    		widget.instantiate(widget.getType(),widget.conf);
    		widget.instantiated = true;
    	}
    	this.insertBeforeWithId( this.conf.id,this.conf.index, widget.getName() );
    };
    /**
	 * This function allows you to insert on the left of widgetID, the new widget created thanks to new RMP_xxx() function
	 * @param {object} widget the inserted widget
	 */
    RMP_CompositeWidget.prototype.insertAfter = function(widget){
    	if( !widget.instantiated ){
    		widget.instantiate(widget.getType(),widget.conf);
    		widget.instantiated = true;
    	}
    	this.insertAfterWithId( this.conf.id,this.conf.index, widget.getName() );
    };
    /**
	 * This function allows you to insert below widgetID, the new widget created thanks to new RMP_xxx() function
	 * @param {object} widget the inserted widget
	 */
    RMP_CompositeWidget.prototype.insertBelow = function(widget){
    	if( !widget.instantiated ){
    		widget.instantiate(widget.getType(),widget.conf);
    		widget.instantiated = true;
    	}
    	this.insertBelowWithId( this.conf.id,this.conf.index, widget.getName() );
    };
    /**
	 * This function allows you to insert above widgetID, the new widget created thanks to new RMP_xxx() function
	 * @param {object} widget the inserted widget
	 */
    RMP_CompositeWidget.prototype.insertAbove = function(widget){
    	if( !widget.instantiated ){
    		widget.instantiate(widget.getType(),widget.conf);
    		widget.instantiated = true;
    	}
    	this.insertAboveWithId( this.conf.id,this.conf.index, widget.getName() );
    };
    /**
	 * This function allows you to remove widgetID. If removeVariable is set to true, it will also deleted content of variable attached to widget
	 * @param {object} widget the inserted widget
	 */
    RMP_CompositeWidget.prototype.remove = function(removeVariable){
    	if( typeof(removeVariable)=="undefined" ){
    		this.removeWithId( this.conf.id,this.conf.index, false );
    	}else{
    		this.removeWithId( this.conf.id,this.conf.index, removeVariable );
    	}
    };
    /**
	 * This function allows you to move widgetID2 before (on the left) widgetID1
	 * @param {object} widget the inserted widget
	 */
    RMP_CompositeWidget.prototype.moveBefore = function(widget){
    	if( !this.instantiated ){
    		this.instantiate(this.getType(),this.conf);
    		this.instantiated = true;
    	}
    	this.moveBeforeWithId( this.conf.id,this.conf.index, widget.getName() );
    };
    /**
	 * This function allows you to move widgetID2 after (on the the right) widgetID1
	 * @param {object} widget the inserted widget
	 */
    RMP_CompositeWidget.prototype.moveAfter = function(widget){
    	if( !this.instantiated ){
    		this.instantiate(this.getType(),this.conf);
    		this.instantiated = true;
    	}
    	this.moveAfterWithId( this.conf.id,this.conf.index, widget.getName() );
    };
}
RMP_CompositeWidget.prototype = new RMP_Component();
RMP_CompositeWidget.prototype.getType = function(){return "RMP_CompositeWidget";};
//instantiate the corresponding GWT component
/** @private */
RMP_CompositeWidget.prototype.instantiate = function( type, confObject ){};
/** @private */
RMP_CompositeWidget.prototype.getElementdWithId = function( nameId, index ){};
/** @private */
RMP_CompositeWidget.prototype.isEnabledWithId = function( nameId, index ){};
/** @private */
RMP_CompositeWidget.prototype.setEnabledWithId = function( nameId, index, e ){};
/** @private */
RMP_CompositeWidget.prototype.isVisibleWithId = function( nameId, index ){};
/** @private */
RMP_CompositeWidget.prototype.setVisibleWithId = function( nameId, index, v ){};
/** @private */
RMP_CompositeWidget.prototype.setTooltipWithId = function( nameId, index, tooltip ){};
/** @private */
RMP_CompositeWidget.prototype.getTooltipWithId = function( nameId, index ){};
/** @private */
RMP_CompositeWidget.prototype.insertAfterWithId = function( nameId, index, widget ){};
/** @private */
RMP_CompositeWidget.prototype.insertBeforeWithId = function( nameId, index, widget ){};
/** @private */
RMP_CompositeWidget.prototype.removeWithId = function( nameId, index, removeVariable ){};
/** @private */
RMP_CompositeWidget.prototype.moveBeforeWithId = function( nameId, index, widget ){};
/** @private */
RMP_CompositeWidget.prototype.moveAfterWithId = function( nameId, index, widget ){};
/** @private */
RMP_CompositeWidget.prototype.insertAboveWithId = function( nameId, index, widget ){};
/** @private */
RMP_CompositeWidget.prototype.insertBelowWithId = function( nameId, index, widget ){};


/**
 *@ignore
  @constructor
  @extends RMP_CompositeWidget
 */
function RMP_ComponentWithVariables( conf ){
	RMP_CompositeWidget.call( this, conf );
	
	/**
	 * This function returns the value of the widget's variable. It does not work for list's widgets (check box list, radio button list and list) where you should use widgetID.getSelectedValue.
	 * @returns {String}
	 */
	RMP_ComponentWithVariables.prototype.getValue = function(){
		var defaultVarName = RMPApplication.getDefaultVariableName(this.conf.id);
		if( !this.isIndexed() ) return RMPApplication.getVariable(defaultVarName);
		return RMPApplication.getIndexedVariable( defaultVarName, this.conf.index );
	};
	/**
	 * This function sets the value of the widget's variable. It does not work for list's widgets (check box list, radio button list and list) where you should use widgetID.setSelectedValue.
	 * @param {String} value
	 */
	RMP_ComponentWithVariables.prototype.setValue = function(value){
		var defaultVarName = RMPApplication.getDefaultVariableName(this.conf.id);
		if( !this.isIndexed() )RMPApplication.setVariable(defaultVarName,value);
		else RMPApplication.setIndexedVariable( defaultVarName, value, this.conf.index);
	};
	/**
	 * This function returns true if the the widget's variable is valid and false otherwise
	 * @param {boolean} checkRules
	 * @returns {boolean}
	 */
	RMP_ComponentWithVariables.prototype.isValid = function(checkRules){
		if( checkRules==undefined ){
			checkRules = false;
		}
		return this.isValidWithId(this.conf.id, this.conf.index,checkRules);
	};
	/**
	 * This function returns true if the the widget's variable is required and false otherwise
	 * @returns {boolean}
	 */
	RMP_ComponentWithVariables.prototype.isRequired = function(){
    	return this.isRequiredWithId(this.conf.id, this.conf.index);
    };
    /**
     * This function sets the mandatory status of the widget's variable
     * @param {boolean} req
     */
    RMP_ComponentWithVariables.prototype.setRequired = function(req){
    	this.setRequiredWithId( this.conf.id, this.conf.index, req );
    };
    /** @private */
    RMP_ComponentWithVariables.prototype.setInternalValid = function( req, callerId ){
    	this.setInternalValidWithId( this.conf.id, this.conf.index, callerId, req );
    };
    /**
     * This function sets the message displayed if a mandatory widget's variable is missing
     * @param {String} msg
     */
    RMP_ComponentWithVariables.prototype.setMissingVariableMessage = function(msg){
    	this.setMissingVariableMessageWithId(this.conf.id, this.conf.index, msg);
    };
    /**
     * This function returns the message displayed if a mandatory widget's variable is missing
     * @returns {String}
     */
    RMP_ComponentWithVariables.prototype.getMissingVariableMessage = function(){
    	return this.getMissingVariableMessageWithId(this.conf.id, this.conf.index);
    };
    /**
     * This function sets the message displayed if a validation rule is not met
     * @param {String} msg
     */
    RMP_ComponentWithVariables.prototype.setValidationVariableMessage = function(msg){
    	this.setValidationVariableMessageWithId(this.conf.id, this.conf.index, msg);
    };
    /**
     * This function returns the message displayed if a validation rule is not met
     * @returns {String}
     */
    RMP_ComponentWithVariables.prototype.getValidationVariableMessage = function(){
    	return this.getValidationVariableMessageWithId(this.conf.id, this.conf.index);
    };
    /**
     * This function returns the list of variables of the widget
     * @returns {object}
     * @example
 	*  <listing>
 	*    ["id8.label","id8.value"] for list or ["textvar"] for a text input
 	*  </listing>
     */
    RMP_ComponentWithVariables.prototype.getListOfMyVariables = function(){
    	return this.getListOfMyVariablesWithId(this.conf.id, this.conf.index);
    };
    /**
     * This function returns true if the the widget's variable is empty and false otherwise
     * @param {String} variable
     * @returns {boolean}
     */
    RMP_ComponentWithVariables.prototype.isEmptyVariable = function( variable ){
    	return this.isEmptyVariableWithId( this.conf.id, this.conf.index, variable );
    };
	/**
	 * This function returns the value of a given variable of the widget
	 * @param {String} varName
	 * @returns {String}
	 */
	RMP_ComponentWithVariables.prototype.getVariableValue = function(varName){
		if( !this.isIndexed() ) return RMPApplication.getVariable(varName);
		return RMPApplication.getIndexedVariable( varName, this.conf.index );
	};
	/**
	 * This function sets the value of a given variable of the widget
	 * @param {String} varName
	 * @param {String} value
	 */
	RMP_ComponentWithVariables.prototype.setVariableValue = function(varName,value){
		if( !this.isIndexed() )RMPApplication.setVariable( varName, value );
		else RMPApplication.setIndexedVariable( varName, value, this.conf.index);
	};
	/**
	 * This function returns true if the the widget's variable is valid and false otherwise
	 * @param {String} varName
	 * @returns {boolean}
	 */
	RMP_ComponentWithVariables.prototype.isValidVariable = function( varName ){
		if( !this.isIndexed() ) return RMPApplication.isValid( varName );
		return RMPApplication.isValidIndexedVariable( varName, this.conf.index );
	};
	/**
	 * This function returns true if the the widget's variable is an array and false otherwise
	 * @param {String} name
	 * @returns {boolean}
	 */
	RMP_ComponentWithVariables.prototype.isIndexedVariable = function(name){
		return RMPApplication.isIndexedVariable(name);
	};
}
RMP_ComponentWithVariables.prototype = new RMP_CompositeWidget();
RMP_ComponentWithVariables.prototype.getType = function(){return "RMP_ComponentWithVariables";};
/** @private */
RMP_ComponentWithVariables.prototype.isRequiredWithId = function( nameId, index ){};
/** @private */
RMP_ComponentWithVariables.prototype.setRequiredWithId = function( nameId, index, req ){};
/** @private */
RMP_ComponentWithVariables.prototype.setInternalValidWithId = function( nameId, index, callerId, req ){};
/** @private */
RMP_ComponentWithVariables.prototype.setMissingVariableMessageWithId = function( nameId, index, msg ){};
/** @private */
RMP_ComponentWithVariables.prototype.getMissingVariableMessageWithId = function( nameId, index ){};
/** @private */
RMP_ComponentWithVariables.prototype.setValidationVariableMessageWithId = function( nameId, index, msg ){};
/** @private */
RMP_ComponentWithVariables.prototype.getValidationVariableMessageWithId = function( nameId, index ){};
/** @private */
RMP_ComponentWithVariables.prototype.getListOfMyVariablesWithId = function( nameId, index ){};
/** @private */
RMP_ComponentWithVariables.prototype.isEmptyVariableWithId = function( nameId, index, variable ){};
/** @private */
RMP_ComponentWithVariables.prototype.isValidWithId = function( nameId, index, checkRules ){};


/**
 *@ignore 
  @constructor
  @extends RMP_ComponentWithVariables
 */
function RMP_LabelledWidget( conf ){
	RMP_ComponentWithVariables.call( this, conf );
	/**
     * This function sets the label of a widget (except for html, image, array and static text widgets which don't have label field)
     * @param {String} text
     */
	RMP_LabelledWidget.prototype.setLabel = function(text){
    	this.setLabelWithId(this.conf.id, this.conf.index, text);
    };
    /**
     * This function returns the label of a widget (if he has one)
     * @returns {String}
     */
    RMP_LabelledWidget.prototype.getLabel = function(){
    	return this.getLabelWithId(this.conf.id, this.conf.index);
    };
}
RMP_LabelledWidget.prototype = new RMP_ComponentWithVariables();
RMP_LabelledWidget.prototype.getType = function(){return "RMP_LabelledWidget";};
/** @private */
RMP_LabelledWidget.prototype.setLabelWithId = function( nameId, index, text ){};
/** @private */
RMP_LabelledWidget.prototype.getLabelWithId = function( nameId, index ){};


/**
* This constructor allows you to create a static text widget that can be inserted dynamically in your web interface
* @example
* <listing>
var conf ={"id":"id_text","text":"My Text"}
var id_text = new RMP_StaticTextArea(conf);
id_widget.insertBefore(id_text ); 
* </listing>
* @class
* @classdesc Static text widget
* @param {Object} conf JSON structure which contains the configuration of the static text
  @extends RMP_CompositeWidget
 */
function RMP_StaticTextArea( conf ){
	RMP_CompositeWidget.call( this, conf );

	/**
	* Sets text field of the widget
	* @param {String} text
	**/
	RMP_StaticTextArea.prototype.setText = function(text){
    	this.setTextWithId(this.conf.id, this.conf.index, text);
    };

    /**
    * @return {String} the text field of the widget
    **/
    RMP_StaticTextArea.prototype.getText = function(){
    	return this.getTextWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets url field of the widget
	* @param {String} url
    **/
    RMP_StaticTextArea.prototype.setUrl = function(url){
    	this.setUrlWithId(this.conf.id, this.conf.index, url);
    };
}
RMP_StaticTextArea.prototype = new RMP_CompositeWidget();
RMP_StaticTextArea.prototype.getType = function(){return "RMP_StaticTextArea";};
/** @private */
RMP_StaticTextArea.prototype.setTextWithId = function( nameId, index, text ){};
/** @private */
RMP_StaticTextArea.prototype.getTextWithId = function( nameId, index ){};
/** @private */
RMP_StaticTextArea.prototype.setUrlWithId = function( nameId, index, url ){};


/**
* This constructor allows you to create an input widget that can be inserted dynamically in your web interface
* @example
* <listing>
var conf = {"id":"id_input","label":{"text":"Text input"},"variable":[{"name":"my_variable","value":"foo"}],"js-type":"RMP_TextInput"};
var id_input= new RMP_TextInput(conf);
id_widget.insertBefore(id_input);
* </listing>
* @class
* @classdesc Text, Mail, Date and Number input widget
* @param {Object} conf JSON structure which contains the configuration of the text, mail, date or number input
  @extends RMP_LabelledWidget
 */
function RMP_TextInput( conf ){
	RMP_LabelledWidget.call( this, conf );

	/**
    * Returns the text type of the widget
	* @returns {String}
    **/
	RMP_TextInput.prototype.getTextType = function(){
    	return this.getTextTypeWithId(this.conf.id, this.conf.index);
    };

    /**
    * @return {boolean} Returns true if keypress field is enabled and false otherwise
    **/
    RMP_TextInput.prototype.isFollowKeyPressEnabled = function(){
    	return this.isFollowKeyPressEnabledWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets the keypress field
	* @param {boolean} enabled
    **/
    RMP_TextInput.prototype.setFollowKeyPressEnabled = function(enabled){
    	this.setFollowKeyPressEnabledWithId( this.conf.id, this.conf.index, enabled );
    };

    /**
    * @return {String} the text field of the widget
    **/
    RMP_TextInput.prototype.getText = function(){
    	return this.getTextWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets the text field of the widget
	* @param {String} text
    **/
    RMP_TextInput.prototype.setText = function(text){
    	this.setTextWithId(this.conf.id, this.conf.index,text);
    };

    /**
    * @return {String} Returns the date field of the date input widget
    **/
    RMP_TextInput.prototype.getDate = function(){
    	return this.getText();
    };

     /**
     * Sets the (text) date field of the date input widget
	 * @param {String} utcDate
     **/
    RMP_TextInput.prototype.setDate = function(utcDate){
    	this.setText(utcDate);
    };

    /**
    * @return {String} Returns the number field of the number input widget
    **/
    RMP_TextInput.prototype.getNumber = function(){
    	return this.getText();
    };

     /**
     *  Sets the (text) number field of the number input widget
	 * @param {String} n
     **/
    RMP_TextInput.prototype.setNumber = function(n){
    	this.setText(n);
    };

    /**
    * Returns the pattern warning of the widget
	* @returns {String}
    **/
    RMP_TextInput.prototype.getPatternWarning = function(){
    	return this.getPatternWarningWithId(this.conf.id, this.conf.index);
    };

    /**
    *  Sets the pattern warning of the widget
	* @param {String} warning
    **/
    RMP_TextInput.prototype.setPatternWarning = function(warning){
    	this.setPatternWarningWithId(this.conf.id, this.conf.index,warning);
    };

    /**
    *   Returns the default value of the widget (use {@link RMP_TextInput#setValue} to set a default value)
	*  @returns {String}
    **/
    RMP_TextInput.prototype.getDefaultValue = function(){
    	return this.getDefaultValueWithId(this.conf.id, this.conf.index);
    };
}
RMP_TextInput.prototype = new RMP_LabelledWidget();
RMP_TextInput.prototype.getType = function(){return "RMP_TextInput";};
/** @private */
RMP_TextInput.prototype.getTextTypeWithId = function( nameId, index ){};
/** @private */
RMP_TextInput.prototype.isFollowKeyPressEnabledWithId = function( nameId, index ){};
/** @private */
RMP_TextInput.prototype.setFollowKeyPressEnabledWithId = function( nameId, index, enabled ){};
/** @private */
RMP_TextInput.prototype.getTextWithId = function( nameId, index ){};
/** @private */
RMP_TextInput.prototype.setTextWithId = function( nameId, index, text ){};
/** @private */
RMP_TextInput.prototype.getPatternWarningWithId = function( nameId, index ){};
/** @private */
RMP_TextInput.prototype.setPatternWarningWithId = function( nameId, index, warning ){};
/** @private */
RMP_TextInput.prototype.getDefaultValueWithId = function( nameId, index ){};
/**
 * Update the default behaviour on computing the return date (including time) after the end user has just entering a date (without time) from the date input widget
 * @callback RMP_TextInput~customDateHandler
 * @param {Object} date selected or typed date
 * @return {Object} computed datetime
 */
/**
 * Add a custom handler to compute the selected or entered date by the end user before setting the date input widget variable
 * By default, the offset time is set to UTC 12:00
 * If a custom handler is configured then it affects all the input date widgets of the Web Interface
 * @param {RMP_TextInput~customDateHandler} customDateHandler
 * @example
 * <listing>
 RMP_TextInput.prototype.setCustomDateHandler(function(selectedDate){
    var computedDate = new Date(selectedDate.getTime());
    computedDate.setHours(12);
    computedDate.setMinutes(0);
    computedDate.setSeconds(0);
    return computedDate;
})
 </listing>
 */
RMP_TextInput.prototype.setCustomDateHandler = function( customDateHandler ){
	RMP_TextInput.prototype.CUSTOM_DATE_HANDLER = customDateHandler;
};



/**
 * @class
 * @classdesc HTML preview widget
 * @extends RMP_TextInput
 */
function RMP_HtmlPreview( conf ) {
	RMP_TextInput.call( this, conf );
}

RMP_HtmlPreview.prototype = new RMP_TextInput();
RMP_HtmlPreview.prototype.getType = function(){return "RMP_HtmlPreview";};
/** @private */
RMP_HtmlPreview.prototype.getDate = function(){};
/** @private */
RMP_HtmlPreview.prototype.getNumber = function(){};
/** @private */
RMP_HtmlPreview.prototype.getTextType = function(){};
/** @private */
RMP_HtmlPreview.prototype.isFollowKeyPressEnabled = function(){};
/** @private */
RMP_HtmlPreview.prototype.setDate = function(value){};
/** @private */
RMP_HtmlPreview.prototype.setNumber = function(value){};
/** @private */
RMP_HtmlPreview.prototype.setFollowKeyPressEnabled = function(value){};


/**
  @class
  @classdesc HTML widget
  @extends RMP_CompositeWidget
 */
function RMP_Html( conf ){
	RMP_CompositeWidget.call( this, conf );

	/**
	* Sets the HTML field of the widget
	* @param {String} html
	**/
	RMP_Html.prototype.setHtml = function(html){
    	this.setHtmlWithId(this.conf.id, this.conf.index, html);
    };

    /**
    * @return {String} Returns the HTML content of the widget
    **/
    RMP_Html.prototype.getHtml = function(){
    	return this.getHtmlWithId(this.conf.id, this.conf.index);
    };
}
RMP_Html.prototype = new RMP_CompositeWidget();
RMP_Html.prototype.getType = function(){return "RMP_Html";};
/** @private */
RMP_Html.prototype.setHtmlWithId = function( nameId, index, html ){};
/** @private */
RMP_Html.prototype.getHtmlWithId = function( nameId, index ){};


/**
 * This constructor allows you to create a JavaScript widget that can be inserted dynamically in your web interface
 * @example
 * <listing>
 var conf = {"id":"id_scripter","label":{"text":"My scripter"},"variable":[{"name":"my_scripter"}],"js-type":"RMP_Scripter","code":"IltbdG90b11dIjs=","listen-variables":[{"name":"toto"}]};
 var id_scripter = new RMP_Scripter(conf );
 id_toto.insertAfter( id_scripter );
 * </listing>
 * @class
 * @classdesc JavaScript widget
 * @param {Object} conf JSON structure which contains the configuration of the JavaScript widget
 @extends RMP_LabelledWidget
 */
function RMP_Scripter( conf ){
	RMP_LabelledWidget.call( this, conf );

    /**
    * @return {String} returns the script of the widget
    **/
	RMP_Scripter.prototype.getScript = function(){
    	return this.getScriptWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets the script of the widget
    * @param {String} script
    **/
    RMP_Scripter.prototype.setScript = function(script){
    	this.setScriptWithId(this.conf.id, this.conf.index, script);
    };

    /**
    *  Sets the script of the widget
    * @param {String} errorMsg
    **/
    RMP_Scripter.prototype.setErrorMsg = function(errorMsg){
    	this.setErrorMsgWithId(this.conf.id, this.conf.index, errorMsg);
    };

    /**
    * @return {String} returns the error message of the widget
    **/
    RMP_Scripter.prototype.getErrorMsg = function(){
    	return this.getErrorMsgWithId(this.conf.id, this.conf.index );
    };

    /**
     * This function executes the script associated to the JavaScript field widget without waiting the end of the construction of the current web interface.
     * It may be useful when handling tricky dependencies between many "Javascript" widgets
     */
    RMP_Scripter.prototype.ensureExecuted = function(){
    	this.ensureExecutedWithId(this.conf.id, this.conf.index);
    };
}
RMP_Scripter.prototype = new RMP_LabelledWidget();
RMP_Scripter.prototype.getType = function(){return "RMP_Scripter";};
/** @private */
RMP_Scripter.prototype.getScriptWithId = function( nameId, index ){};
/** @private */
RMP_Scripter.prototype.setScriptWithId = function( nameId, index, script ){};
/** @private */
RMP_Scripter.prototype.setErrorMsgWithId = function( nameId, index, errorMsg ){};
/** @private */
RMP_Scripter.prototype.getErrorMsgWithId = function( nameId, index ){};
/** @private */
RMP_Scripter.prototype.ensureExecutedWithId = function( nameId, index ){};


/**
* This constructor allows you to create a checkbox widget that can be inserted dynamically in your web interface
* @example
* <listing>
var conf = {"id":"id_check","label":"Checker","variable":[{"name":"fifi","value":"yes"}],"valueoff":"no","valueon":"yes"};
var id_check= new RMP_CheckBox(conf); 
id_widget.insertBefore(id_check); 
* </listing>
* @class
* @classdesc Checkbox widget
* @param {Object} conf JSON structure which contains the configuration of the checkbox
  @extends RMP_ComponentWithVariables
 */
function RMP_CheckBox( conf ){
	RMP_ComponentWithVariables.call( this, conf );

    /**
    * Checks the box if called with true and uncheck the box if called with false
    * @param {boolean} checked
    **/
	RMP_CheckBox.prototype.setChecked = function(checked){
    	this.setCheckedWithId( this.conf.id, this.conf.index, checked );
    };

    /**
    * @return {boolean} returns true if the box is checked and false otherwise
    **/
    RMP_CheckBox.prototype.isChecked = function(){
    	return this.isCheckedWithId( this.conf.id, this.conf.index );
    };

    /**
    * Sets the label of a widget
    *  @param {String} label
    **/
    RMP_CheckBox.prototype.setLabel = function(label){
    	this.setLabelWithId( this.conf.id, this.conf.index, label );
    };
    
    /**
     * @return {String} returns the label of the switch widget
     **/
    RMP_CheckBox.prototype.getLabel = function(){
     	return this.getLabelWithId(this.conf.id, this.conf.index);
     };
}
RMP_CheckBox.prototype = new RMP_ComponentWithVariables();
RMP_CheckBox.prototype.getType = function(){return "RMP_CheckBox";};
/** @private */
RMP_CheckBox.prototype.setCheckedWithId = function( nameId, index, checked ){};
/** @private */
RMP_CheckBox.prototype.isCheckedWithId = function( nameId, index ){};
/** @private */
RMP_CheckBox.prototype.setLabelWithId = function( nameId, index, label ){};
/** @private */
RMP_CheckBox.prototype.getLabelWithId = function( nameId, index ){};



/**
 * @ignore
@constructor
@extends RMP_LabelledWidget
*/
function RMP_WidgetWithDataList( conf ){
	RMP_LabelledWidget.call( this, conf );

	/**
    * @returns {String} returns the label selected by the connected user
    **/
	RMP_WidgetWithDataList.prototype.getSelectedLabel = function(){
    	return this.getSelectedLabelWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets label (value) displayed to the connected user
    * @param {String} label
    **/
    RMP_WidgetWithDataList.prototype.setSelectedLabel = function(label){
    	this.setSelectedLabelWithId(this.conf.id, this.conf.index, label);
    };

    /**
     * @returns {String} returns the value selected by the connected user. It does not work with multi selection list.
    **/
    RMP_WidgetWithDataList.prototype.getSelectedValue = function(){
    	return this.getSelectedValueWithId(this.conf.id, this.conf.index);
    };

    /**
    *  Sets value (label) displayed to the connected user
    * @param {String} value
    **/
    RMP_WidgetWithDataList.prototype.setSelectedValue = function(value){
    	this.setSelectedValueWithId(this.conf.id, this.conf.index, value);
    };

    /**
    *  Set URL field of your list widget
    *  @param {String} url
    **/
    RMP_WidgetWithDataList.prototype.loadList = function( url ){
    	this.loadListWithId(this.conf.id, this.conf.index, url);
    };

    /**
    * @returns {String} returns the variable name of a variable based list widget
    **/
    RMP_WidgetWithDataList.prototype.getListVariableName = function(){
    	return this.getListVariableNameWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets the variable name of a variable based list widget
    * @param {String} name
    **/
    RMP_WidgetWithDataList.prototype.setListVariableName = function(name){
    	this.setListVariableNameWithId(this.conf.id, this.conf.index, name);
    };

    /**
    *  Returns the content of a list
	* @returns {RMP_List}
    * @example
    * The content of a list is returned with the following structure
    *<listing>
    * [{"label":"label1","value":"value1"},{"label":"label2","value":"value2"},{"label":"label3","value":"value3"}]
    *</listing>
	* @see {@link RMP_List} to know more about the "RunMyProcess List" structure
    **/
    RMP_WidgetWithDataList.prototype.getList = function(){
    	return this.getListWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets the post loaded script of a list
    * @param {String} script
    **/
    RMP_WidgetWithDataList.prototype.setPostLoadedScript = function(script){
    	this.setPostLoadedScriptWithId(this.conf.id, this.conf.index, script);
    };

    /**
    *  reset a list selection to empty
    **/
    RMP_WidgetWithDataList.prototype.reset = function(){
    	this.resetWithId(this.conf.id, this.conf.index);
    };
    
    /**
     * Set the picked item
     * @param {String} label
     * @param {String} value
     **/
    RMP_WidgetWithDataList.prototype.setPicked = function( label, value ){
    	this.setPickedWithId( this.conf.id, this.conf.index, label, value );
    };
}
RMP_WidgetWithDataList.prototype = new RMP_LabelledWidget();
RMP_WidgetWithDataList.prototype.getType = function(){return "RMP_WidgetWithDataList";};
/** @private */
RMP_WidgetWithDataList.prototype.getSelectedLabelWithId = function( nameId, index ){};
/** @private */
RMP_WidgetWithDataList.prototype.setSelectedLabelWithId = function( nameId, index, label ){};
/** @private */
RMP_WidgetWithDataList.prototype.getSelectedValueWithId = function( nameId, index ){};
/** @private */
RMP_WidgetWithDataList.prototype.setSelectedValueWithId = function( nameId, index, value ){};
/** @private */
RMP_WidgetWithDataList.prototype.loadListWithId = function( nameId, index, url ){};
/** @private */
RMP_WidgetWithDataList.prototype.getListVariableNameWithId = function( nameId, index ){};
/** @private */
RMP_WidgetWithDataList.prototype.setListVariableNameWithId = function( nameId, index, name ){};
/** @private */
RMP_WidgetWithDataList.prototype.getListWithId = function( nameId, index ){};
/** @private */
RMP_WidgetWithDataList.prototype.setPostLoadedScriptWithId = function( nameId, index, script ){};
/** @private */
RMP_WidgetWithDataList.prototype.setCallbackScript = this.setPostLoadedScript;
/** @private */
RMP_WidgetWithDataList.prototype.resetWithId = function( nameId, index ){};



/**
* This constructor allows you to create a list widget that can be inserted dynamically in your web interface
* @example
* <listing>
var conf = {"id":"id_list","label":"My List","variable":[{"name":"my_list_label","ref":"label"},{"name":"my_list_value","ref":"value"}],"url":"live/1/data/6fb67310-5307-11e1-a3cc-f0bf97e1b068?P_version=${P_version}&P_mode=${P_mode}","list_type":"custom_list","label-field":{"tagname":"json:label"},"value-field":{"tagname":"json:value"},"visible-items":"1","label":{"text":"My List"}};
var id_list= new RMP_ListBox(conf); 
id_widget.insertBefore(id_list); 
* </listing>
* @class
* @classdesc List widget
* @param {Object} conf JSON structure which contains the configuration of the list
  @extends RMP_WidgetWithDataList
 */
function RMP_ListBox( conf ){
	RMP_WidgetWithDataList.call( this, conf );

	/**
	*  Returns the "prompt" value of the listbox
	* @returns {String}
	**/
	RMP_ListBox.prototype.getPrompt = function(){
    	return this.getPromptWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets the "prompt" value of the listbox
	* @param {String} prompt
    **/
    RMP_ListBox.prototype.setPrompt = function(prompt){
    	this.setPromptWithId(this.conf.id, this.conf.index, prompt);
    };
}
RMP_ListBox.prototype = new RMP_WidgetWithDataList();
RMP_ListBox.prototype.getType = function(){return "RMP_ListBox";};
/** @private */
RMP_ListBox.prototype.getPromptWithId = function( nameId, index ){};
/** @private */
RMP_ListBox.prototype.setPromptWithId = function( nameId, index, prompt ){};



/**
* This constructor allows you to create a radioButton widget that can be inserted dynamically in your web interface
* @example
* <listing>
var conf = {"id":"id_list","label":"My List","variable":[{"name":"my_list_label","ref":"label"},{"name":"my_list_value","ref":"value"}],"url":"live/1/data/6fb67310-5307-11e1-a3cc-f0bf97e1b068?P_version=${P_version}&P_mode=${P_mode}","list_type":"custom_list","label-field":{"tagname":"json:label"},"value-field":{"tagname":"json:value"},"visible-items":"1","label":{"text":"My List"}};
var id_list= new RMP_RadioButton(conf); 
id_widget.insertBefore(id_list); 
* </listing>
* @class
* @classdesc RadioButton widget
* @param {Object} conf JSON structure which contains the configuration of the radioButton
* @extends RMP_WidgetWithDataList
*/
function RMP_RadioButton( conf ){
	RMP_WidgetWithDataList.call( this, conf );
}
RMP_RadioButton.prototype = new RMP_WidgetWithDataList();
RMP_RadioButton.prototype.getType = function(){return "RMP_RadioButton";};



/**
* This constructor allows you to create a button widget that can be inserted dynamically in your web interface
* @example
* <listing>
var conf = {"id":"id_button","label":"Execute","variable":[{"name":"my_variable","value":"foo"}],"action":"execute_script","executed-script":"YWxlcnQoInllZWVlZWVlZXMiKTs="};
var id_button= new RMP_Button(conf); 
id_widget.insertBefore(id_button);
* </listing>
* @class
* @classdesc Button widget
* @param {Object} conf JSON structure which contains the configuration of the button
  @extends RMP_ComponentWithVariables
 */
function RMP_Button( conf ){
	RMP_ComponentWithVariables.call( this, conf );

    /**
    * @Deprecated
    * This function sets "Close windows" to yes if true and no otherwise
    * @param {Boolean} close
    **/
	RMP_Button.prototype.setCloseAfterAction = function(close){
    	this.setCloseAfterActionWithId(this.conf.id, this.conf.index, close);
    };

    /**
    * @Deprecated
    * @return {boolean} returns true if "Close windows" field is checked and false otherwise
    **/
    RMP_Button.prototype.isCloseAfterAction = function(){
    	return this.isCloseAfterActionWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets the message field displayed to the connected user when the button is clicked
    * @param {String} msg
    **/
    RMP_Button.prototype.setMessage = function(msg){
    	this.setMessageWithId(this.conf.id, this.conf.index, msg);
    };

    /**
    * @return {String} returns the message field displayed to the connected user when the button is clicked
    **/
    RMP_Button.prototype.getMessage = function(){
    	return this.getMessageWithId(this.conf.id, this.conf.index);
    };

    /**
    *  @return {String} returns the redirect URL if the "On click" type is "Redirect"
    **/
    RMP_Button.prototype.getRedirectUrl = function(){
    	return this.getRedirectUrlWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets the redirect URL if the "On click" type is "Redirect"
    * @param {String} url
    **/
    RMP_Button.prototype.setRedirectUrl = function(url){
    	this.setRedirectUrlWithId(this.conf.id, this.conf.index, url);
    };

    /**
    * Returns the "On click" type ("show-message", "close", "redirect", "load-next")
    **/
    RMP_Button.prototype.getOnClickAction = function(){
    	return this.getOnClickActionWithId(this.conf.id, this.conf.index);
    };

    /**
    *  Sets the the "On click" type
	* @param {String} action
	* @example
	* <listing>"show-message", "close", "redirect", "load-next"</listing>
    **/
    RMP_Button.prototype.setOnClickAction = function(action){
    	this.setOnClickActionWithId(this.conf.id, this.conf.index, action);
    };

    /**
    * Sets the label of a widget
    *  @param {String} text
    **/
    RMP_Button.prototype.setLabel = function(text){
    	this.setLabelWithId(this.conf.id, this.conf.index, text);
    };

    /**
    * @return {String} returns the label of the widget
    **/
    RMP_Button.prototype.getLabel = function(){
    	return this.getLabelWithId(this.conf.id, this.conf.index);
    };
}
RMP_Button.prototype = new RMP_ComponentWithVariables();
RMP_Button.prototype.getType = function(){return "RMP_Button";};
/** @private */
RMP_Button.prototype.setCloseAfterActionWithId = function( nameId, index, close ){};
/** @private */
RMP_Button.prototype.isCloseAfterActionWithId = function( nameId, index ){};
/** @private */
RMP_Button.prototype.setMessageWithId = function( nameId, index, msg ){};
/** @private */
RMP_Button.prototype.getMessageWithId = function( nameId, index ){};
/** @private */
RMP_Button.prototype.getRedirectUrlWithId = function( nameId, index ){};
/** @private */
RMP_Button.prototype.setRedirectUrlWithId = function( nameId, index, url ){};
/** @private */
RMP_Button.prototype.getOnClickActionWithId = function( nameId, index ){};
/** @private */
RMP_Button.prototype.setOnClickActionWithId = function( nameId, index, action ){};
/** @private */
RMP_Button.prototype.setLabelWithId = function( nameId, index, text ){};
/** @private */
RMP_Button.prototype.getLabelWithId = function( nameId, index ){};



/**
  @ignore
  @class
  @extends RMP_ListBox
 */
function RMP_ComboBox( conf ){
	RMP_ListBox.call( this, conf );
}
RMP_ComboBox.prototype = new RMP_ListBox();
RMP_ComboBox.prototype.getType = function(){return "RMP_ComboBox";};



/**
  @class
  @classdesc Image widget
  @extends RMP_CompositeWidget
 */
function RMP_Image( conf ){
	RMP_CompositeWidget.call( this, conf );

	/**
	* Sets  the URL field of the widget
	* @param {String} url
	**/
	RMP_Image.prototype.setUrl = function(url){
    	this.setUrlWithId(this.conf.id, this.conf.index, url);
    };

    /**
    * Returns the URL field of the widget
    * @return {String}
    **/
    RMP_Image.prototype.getUrl = function(){
    	return this.getUrlWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets  the target url field of the widget
    * @param {String} url
    **/
    RMP_Image.prototype.setTargetUrl = function(url){
    	this.setTargetUrlWithId(this.conf.id, this.conf.index, url);
    };

    /**
    * Returns the target url field of the widget
    * @return {String}
    **/
    RMP_Image.prototype.getTargetUrl = function(){
    	return this.getTargetUrlWithId(this.conf.id, this.conf.index);
    };
}
RMP_Image.prototype = new RMP_CompositeWidget();
RMP_Image.prototype.getType = function(){return "RMP_Image";};
/** @private */
RMP_Image.prototype.setUrlWithId = function( nameId, index, url ){};
/** @private */
RMP_Image.prototype.getUrlWithId = function( nameId, index ){};
/** @private */
RMP_Image.prototype.setTargetUrlWithId = function( nameId, index, url ){};
/** @private */
RMP_Image.prototype.getTargetUrlWithId = function( nameId, index ){};




/**
 * @ignore
  @class
  @extends RMP_CompositeWidget
 */
function RMP_Cell( conf ){
	RMP_CompositeWidget.call( this, conf );
}
RMP_Cell.prototype = new RMP_CompositeWidget();
RMP_Cell.prototype.getType = function(){return "RMP_Cell";};


/**
* This constructor allows you to create a fileUpload widget that can be inserted dynamically in your web interface
* @example
* <listing>
var conf = {"id":"id_upload","label":{"text":"My upload widget"},"variable":[{"name":"upload_variable","value":""}],"js-type":"RMP_FileUpload","tooltip":"My tooltip",
"action":"file_upload","submit":"Submit","file-exts":[{"ext":"png"},{"ext":"pdf"}],"url":"live/1/entity/0f8406f0-3cb7-11e4-804d-f0bf97e1b068/upload?appli=[[appli_id]]&amp;context=[[context]]&amp;P_mode=TEST&amp;P_version="};
var id_upload= new RMP_FileUpload(conf);
id_widget.insertBefore(id_upload);
* </listing>
* @class
* @classdesc FileUpload widget
* @param {Object} conf JSON structure which contains the configuration of the fileUpload
  @extends RMP_LabelledWidget
 */
function RMP_FileUpload( conf ){
	RMP_LabelledWidget.call( this, conf );
	
	/**
	 * @return {String} The content of the label inside the upload button.
	 */
	RMP_FileUpload.prototype.getUpload = function(){
    	return this.getUploadWithId(this.conf.id, this.conf.index);
    };
    /**
     * Sets the content of the label inside the upload button
	 * @param {string} text
     */
    RMP_FileUpload.prototype.setUpload = function(text){
    	return this.setUploadWithId(this.conf.id,this.conf.index,text);
    };
    /**
     * @return {int} the number of files that where uploaded.
     */
    RMP_FileUpload.prototype.getUploadedCount = function(){
    	return this.getUploadedCountWithId(this.conf.id,this.conf.index);
    };
    /**
     * @return {Object} the element corresponding to the button
     */
    RMP_FileUpload.prototype.getBrowseButton = function(){
    	return this.getBrowseButtonWithId(this.conf.id,this.conf.index);
    };
    /**
     * @return {Object} the element corresponding to the button
     */
    RMP_FileUpload.prototype.getUploadButton = function(){
    	return this.getUploadButtonWithId(this.conf.id,this.conf.index);
    };
    /**
     * @return {Object} the element corresponding to the button
     */
    RMP_FileUpload.prototype.getDownloadButton = function(){
    	return this.getgetDownloadButtonWithId(this.conf.id,this.conf.index);
    };
    /**
     * @return {Object} the element corresponding to the button
     */
    RMP_FileUpload.prototype.getDeleteButton = function(){
    	return this.getDeleteButtonWithId(this.conf.id,this.conf.index);
    };
    /**
     * Automatically browses
     */
    RMP_FileUpload.prototype.browse = function(){
    	this.browseWithId(this.conf.id,this.conf.index);
    };
    /**
     * Uploads the chosen file
     */
    RMP_FileUpload.prototype.upload = function(){
    	this.uploadWithId(this.conf.id,this.conf.index);
    };
    /**
     * Downloads all selected files
     */
    RMP_FileUpload.prototype.downloadSelected = function(){
    	this.downloadSelectedWithId(this.conf.id,this.conf.index);
    };
    /**
     * Deletes all selected files
     */
    RMP_FileUpload.prototype.deleteSelected = function(){
    	this.deleteSelectedWithId(this.conf.id,this.conf.index);
    };
    /**
     * Select a file by it's name
	 * @param {string} filename
     */
    RMP_FileUpload.prototype.selectFile = function(filename){
    	this.selectFileWithId(this.conf.id,this.conf.index,filename);
    };
    /**
     * Deselect the given file
	 * @param {string} filename
     */
    RMP_FileUpload.prototype.deselectFile = function(filename){
    	this.deselectFileWithId(this.conf.id,this.conf.index,filename);
    };
    /**
     * Select a file by it's id
	 * @param {string} fileId
     */
    RMP_FileUpload.prototype.selectFileId = function(fileId){
    	this.selectFileIdWithId(this.conf.id,this.conf.index,fileId);
    };
    /**
     * Deselect the given file by it's id
	 * @param {string} fileId
     */
    RMP_FileUpload.prototype.deselectFileId = function(fileId){
    	this.deselectFileIdWithId(this.conf.id,this.conf.index,fileId);
    };
    /**
     * Refresh the widget's list
     */
    RMP_FileUpload.prototype.refresh = function(){
    	this.refreshWithId(this.conf.id,this.conf.index);
    };
}
RMP_FileUpload.prototype = new RMP_LabelledWidget();
RMP_FileUpload.prototype.getType = function(){return "RMP_FileUpload";};
/** @private */
RMP_FileUpload.prototype.getUploadWithId = function(nameId,index){};
/** @private */
RMP_FileUpload.prototype.setUploadWithId = function(nameId,index,text){};
/** @private */
RMP_FileUpload.prototype.getUploadedCountWithId = function(nameId,index){};
/** @private */
RMP_FileUpload.prototype.getBrowseButtonWithId = function(nameId,index){};
/** @private */
RMP_FileUpload.prototype.getUploadButtonWithId = function(nameId,index){};
/** @private */
RMP_FileUpload.prototype.getDownloadButtonWithId = function(nameId,index){};
/** @private */
RMP_FileUpload.prototype.getDeleteButtonWithId = function(nameId,index){};
/** @private */
RMP_FileUpload.prototype.browseWithId = function(nameId,index){};
/** @private */
RMP_FileUpload.prototype.uploadWithId = function(nameId,index){};
/** @private */
RMP_FileUpload.prototype.downloadSelectedWithId = function(nameId,index){};
/** @private */
RMP_FileUpload.prototype.deleteSelectedWithId = function(nameId,index){};
/** @private */
RMP_FileUpload.prototype.selectFileWithId = function(nameId,index,filename){};
/** @private */
RMP_FileUpload.prototype.deselectFileWithId = function(nameId,index,filename){};
/** @private */
RMP_FileUpload.prototype.selectFileIdWithId = function(nameId,index,fileId){};
/** @private */
RMP_FileUpload.prototype.deselectFileIdWithId = function(nameId,index,fileId){};
/** @private */
RMP_FileUpload.prototype.refreshWithId = function(nameId,index){};


/**
 * @ignore
  @class
  @extends RMP_Cell
 */
function RMP_Empty( conf ){
	RMP_Cell.call( this, conf );
}
RMP_Empty.prototype = new RMP_Cell();
RMP_Empty.prototype.getType = function(){return "RMP_Empty";};


/**
 * @ignore
  @class
  @extends RMP_CompositeWidget
 */
function RMP_Table( conf ){
	RMP_CompositeWidget.call( this, conf );
}
RMP_Table.prototype = new RMP_CompositeWidget();
RMP_Table.prototype.getType = function(){return "RMP_Table";};


/**
* This constructor allows you to create an array widget that can be inserted dynamically in your web interface
* @example
* <listing>
var columnConf = {"id":"id_text","label":{"text":"My label"},"variable":[{"name":"my_variable","value":"foo"}],"js-type":"RMP_TextInput"};
var footerConf = {"js-type":"RMP_Scripter","listen-variables":[{"name":"array.foo"}],"function":{"name":"SUM","parameter":"array.foo"}};
var conf = {"id":"id_array","variable":[{"name":"array"}],"column":[{"header":"Header 1","widget":columnConf,"footer":footerConf}]};
var id_array = new RMP_Array(conf );
id_widget.insertAfter(id_array );
* </listing>
* @class
* @classdesc Array widget
* @param {Object} conf JSON structure which contains the configuration of the array
* @extends RMP_ComponentWithVariables
 */
function RMP_Array( conf ){
	RMP_ComponentWithVariables.call( this, conf );

	/**
    * This function inserts a row before index (index is starts at '0')
    * @param{String} rowIndex
    * @example
    * <listing>
    *  widgetID.insertRow("0")
    * </listing>
    **/
	RMP_Array.prototype.insertRow = function(rowIndex){
    	this.insertRowWithId(this.conf.id,rowIndex);
    };

    /**
    * This function removes a given row (rowIndex starts at '0')
    * @param{String} rowIndex
    **/
    RMP_Array.prototype.removeRow = function(rowIndex){
    	this.removeRowWithId(this.conf.id,rowIndex);
    };

    /**
    * This function returns the number of rows of an array
    **/
    RMP_Array.prototype.getRowsCount = function(){
    	return this.getRowsCountWithId(this.conf.id);
    };

    /**
    * This function returns the number of columns of an array
    **/
    RMP_Array.prototype.getColumnsCount = function(){
    	return this.getColumnsCountWithId(this.conf.id);
    };

    /**
	* returns true if the "Can modify" field is checked and false otherwise
    * @returns {boolean}
    **/
    RMP_Array.prototype.isModifyRows = function(){
    	return this.isModifyRowsWithId(this.conf.id);
    };

    /**
    * Allows you to enable or disable the add and delete row buttons on an array
    * @param {boolean} modifyRows
    **/
    RMP_Array.prototype.setModifyRows = function(modifyRows){
    	return this.setModifyRowsWithId(this.conf.id,modifyRows);
    };

    /**
    * Sets a column as active or not (indexCol starts at '0')
    * @param {String} indexCol
    * @param {boolean} active
    **/
    RMP_Array.prototype.setColumnActive = function( indexCol, active ){
    	this.setColumnActiveWithId( this.conf.id, indexCol, active );
    };

    /**
    * Sets a column as visible or not (indexCol starts at '0')
    * @param {String} indexCol
    * @param {boolean} visible
    **/
    RMP_Array.prototype.setColumnVisible = function( indexCol, visible ){
    	this.setColumnVisibleWithId( this.conf.id, indexCol, visible );
    };

	/**
	 * This function returns true if the the widget's column is visible and false otherwise. If the column do not exists is return false
	 * @param {String} indexCol column's index. (indexCol starts at '0')
	 **/
	RMP_Array.prototype.isColumnVisible = function( indexCol ){
		return this.isColumnVisibleWithId( this.conf.id, indexCol );
	};

    /**
	* returns true if the array is allowed to add new rows and false otherwise
    * @returns {boolean}
    **/
    RMP_Array.prototype.isAddRows = function(){
    	return this.isAddRowsWithId(this.conf.id);
    };

    /**
    * Sets the "Add rows" field value
    * @param {boolean} addRows
    **/
    RMP_Array.prototype.setAddRows = function(addRows){
    	return this.setAddRowsWithId(this.conf.id,addRows);
    };

    /**
	* returns true if the array is allowed to delete rows and false otherwise
    * @returns {boolean}
    **/
    RMP_Array.prototype.isDeleteRows = function(){
    	return this.isDeleteRowsWithId(this.conf.id);
    };

    /**
    * Sets the "Delete rows" field value
    * @param {boolean} deleteRows
    **/
    RMP_Array.prototype.setDeleteRows = function(deleteRows){
    	return this.setDeleteRowsWithId(this.conf.id,deleteRows);
    };

    /**
    * This function returns the header value of a given column of the widget array (columnIndex starts at '0')
    * @param {String} columnIndex
    **/
    RMP_Array.prototype.getHeader = function( columnIndex ){
    	return this.getHeaderWithId(this.conf.id,columnIndex);
    };

    /**
    * Sets the header value of a given column of the widget array
    * @param {String} columnIndex
    * @param {String} text
    **/
    RMP_Array.prototype.setHeader = function(columnIndex, text){
    	return this.setHeaderWithId(this.conf.id,columnIndex,text);
    };
}
RMP_Array.prototype = new RMP_ComponentWithVariables();
RMP_Array.prototype.getType = function(){return "RMP_Array";};
/** @private */
RMP_Array.prototype.insertRowWithId = function(nameId,rowIndex){};
/** @private */
RMP_Array.prototype.removeRowWithId = function(nameId,rowIndex){};
/** @private */
RMP_Array.prototype.getRowsCountWithId = function(nameId){};
/** @private */
RMP_Array.prototype.getColumnsCountWithId = function(nameId){};
/** @private */
RMP_Array.prototype.isModifyRowsWithId = function(nameId){};
/** @private */
RMP_Array.prototype.setModifyRowsWithId = function(nameId,modifyRows){};
/** @private */
RMP_Array.prototype.setColumnActiveWithId = function( nameId, indexCol, active ){};
/** @private */
RMP_Array.prototype.setColumnVisibleWithId = function( nameId, indexCol, visible ){};
/** @private */
RMP_Array.prototype.isColumnVisibleWithId = function( nameId, indexCol ){};
/** @private */
RMP_Array.prototype.isAddRowsWithId = function(nameId){};
/** @private */
RMP_Array.prototype.setAddRowsWithId = function(nameId,addRows){};
/** @private */
RMP_Array.prototype.isDeleteRowsWithId = function(nameId){};
/** @private */
RMP_Array.prototype.setDeleteRowsWithId = function(nameId,deleteRows){};
/** @private */
RMP_Array.prototype.getHeaderWithId = function(nameId,columnIndex){};
/** @private */
RMP_Array.prototype.setHeaderWithId = function(nameId,columnIndex,text){};



/**
 * @ignore
@class
@extends RMP_WidgetWithDataList
*/
function RMP_MultiSelectionWidget( conf ){
	RMP_WidgetWithDataList.call( this, conf );
}
RMP_MultiSelectionWidget.prototype = new RMP_WidgetWithDataList();
RMP_MultiSelectionWidget.prototype.getType = function(){return "RMP_MultiSelectionWidget";};


/**
* @ignore
  @class
  @extends RMP_MultiSelectionWidget
 */
function RMP_MultiSelectionListBox( conf ){
	RMP_MultiSelectionWidget.call( this, conf );
}
RMP_MultiSelectionListBox.prototype = new RMP_MultiSelectionWidget();
RMP_MultiSelectionListBox.prototype.getType = function(){return "RMP_MultiSelectionListBox";};



/**
* This constructor allows you to create a multi-selection checkbox widget that can be inserted dynamically in your web interface
* @example
* <listing>
var conf = {"id":"id_list","label":"My List","variable":[{"name":"my_list_label","ref":"label"},{"name":"my_list_value","ref":"value"}],"url":"live/1/data/6fb67310-5307-11e1-a3cc-f0bf97e1b068?P_version=${P_version}&P_mode=${P_mode}","list_type":"custom_list","label-field":{"tagname":"json:label"},"value-field":{"tagname":"json:value"},"visible-items":"1","label":{"text":"My List"}};
var id_list= new RMP_MultiSelectionCheckBox(conf); 
id_widget.insertBefore(id_list); 
* </listing>
* @class
* @classdesc Multi-selection checkbox widget
* @param {Object} conf JSON structure which contains the configuration of the multi-selection checkbox
  @extends RMP_MultiSelectionWidget 
 */
function RMP_MultiSelectionCheckBox( conf ){
	RMP_MultiSelectionWidget.call( this, conf );
}
RMP_MultiSelectionCheckBox.prototype = new RMP_MultiSelectionWidget();
RMP_MultiSelectionCheckBox.prototype.getType = function(){return "RMP_MultiSelectionCheckBox";};



/**
* This constructor allows you to create a tab widget that can be inserted dynamically in your web interface
* @example
* <listing>
var conf = {"id":"id_tab","js-type":"RMP_TabPanel","first-tab":"0","tabpos":"bottom","min-height":"200",tab:
	  [{"visible":"true","active":"true","label":"TmV3IHRhYiAx","onclick":"Y29uc29sZS5sb2coInNlbGVjdGVkIik7","active-condition":"dHJ1ZQ==","visible-condition":"dHJ1ZQ=="},
	  {"visible":"true","active":"true","label":"TmV3IHRhYiAy"}]};
	  
var id_tab = new RMP_TabPanel(conf);
id_widget.insertBefore(id_tab); 
* </listing>
* @class
* @classdesc Tab widget
* @param {Object} conf JSON structure which contains the configuration of the tab
  @extends RMP_CompositeWidget
 */
function RMP_TabPanel( conf ){
	RMP_CompositeWidget.call( this, conf );

	/**
    * Sets a selected tab according to its index (index starts at '0')
    * @param {String} tabIndex
    **/
	RMP_TabPanel.prototype.setSelectedTabIndex = function(tabIndex){
    	this.setSelectedTabIndexWithId(this.conf.id, this.conf.index, tabIndex);
    };

    /**
    * This function returns "name" and "index" of tab (index starts at '0')
    * @return {String}
    * @return {String}
    **/
    RMP_TabPanel.prototype.getSelectedTabIndex = function(){
    	return this.getSelectedTabIndexWithId(this.conf.id, this.conf.index);
    };

    /**
    *  Sets the name of a tab according to its index (index starts at '0')
    * @param {String} tabIndex
    * @param {String} label
    **/
    RMP_TabPanel.prototype.setTabLabel = function( tabIndex, label ){
    	this.setTabLabelWithId( this.conf.id, this.conf.index, tabIndex, label );
    };

    /**
    * @param {String} tabIndex
    * @return {String} returns the name of a tab according to its index (index starts at '0')
    **/
    RMP_TabPanel.prototype.getTabLabel = function(tabIndex){
    	return this.getTabLabelWithId(this.conf.id, this.conf.index, tabIndex);
    };

    /**
    * Sets a tab as visible or not according to its index (index starts at '0')
    * @param {String} tabIndex
    * @param {boolean} visible
    **/
    RMP_TabPanel.prototype.setTabVisible = function( tabIndex, visible ){
    	this.setTabVisibleWithId( this.conf.id, this.conf.index, tabIndex, visible );
    };

    /**
    * @param {String} tabIndex
    * @return {boolean} returns true if the tab is invisible and false otherwise (index starts at '0')
    **/
    RMP_TabPanel.prototype.isTabVisible = function(tabIndex){
    	return this.isTabVisibleWithId(this.conf.id, this.conf.index, tabIndex);
    };

    /**
    * Sets a tab as active or not according to its index (index starts at '0')
    * @param {String} tabIndex
    * @param {boolean} active
    **/
    RMP_TabPanel.prototype.setTabActive = function( tabIndex, active ){
    	this.setTabActiveWithId( this.conf.id, this.conf.index, tabIndex, active );
    };

    /**
    * @param {String} tabIndex
    * @return {boolean} returns true if the tab is active and false otherwise (index starts at '0')
    **/
    RMP_TabPanel.prototype.isTabActive = function(tabIndex){
    	return this.isTabActiveWithId(this.conf.id, this.conf.index, tabIndex);
    };
    /**
     *   Insert a dynamic widget inside a tab
     *   @method
     *   @param {String} tabIndex index of the tab that will wrap the widget
     *   @param {object} widget the inserted widget
     */
    RMP_TabPanel.prototype.insertInsideTab = function(tabIndex,widget){
    	if( !widget.instantiated ){
    		widget.instantiate(widget.getType(),widget.conf);
    		widget.instantiated = true;
    	}
    	this.insertInsideTabWithId(this.conf.id, this.conf.index, tabIndex, widget.getName());
    };
}
RMP_TabPanel.prototype = new RMP_CompositeWidget();
RMP_TabPanel.prototype.getType = function(){return "RMP_TabPanel";};
/** @private */
RMP_TabPanel.prototype.setSelectedTabIndexWithId = function( nameId, widgetIndex, tabIndex ){};
/** @private */
RMP_TabPanel.prototype.getSelectedTabIndexWithId = function( nameId, widgetIndex ){};
/** @private */
RMP_TabPanel.prototype.setTabLabelWithId = function( nameId, widgetIndex, tabIndex, label ){};
/** @private */
RMP_TabPanel.prototype.getTabLabelWithId = function( nameId, widgetIndex, tabIndex ){};
/** @private */
RMP_TabPanel.prototype.setTabVisibleWithId = function( nameId, widgetIndex, tabIndex, visible ){};
/** @private */
RMP_TabPanel.prototype.isTabVisibleWithId = function( nameId, widgetIndex, tabIndex ){};
/** @private */
RMP_TabPanel.prototype.setTabActiveWithId = function( nameId, widgetIndex, tabIndex, active ){};
/** @private */
RMP_TabPanel.prototype.isTabActiveWithId = function( nameId, widgetIndex, tabIndex ){};
/** @private */
RMP_TabPanel.prototype.insertInsideTabWithId = function( nameId, widgetIndex, tabIndex, insertedWidgetId ){};


/**
* This constructor allows you to create a section widget that can be inserted dynamically in your web interface
* @example
* <listing>
var conf = {"id":"id_section","js-type":"RMP_Section","label":"SGVhZGVyIHRleHQ=","open":"true","on-open":"Y29uc29sZS5sb2coInNlY3Rpb24gb3BlbmVkIik7","on-close":"Y29uc29sZS5sb2coInNlY3Rpb24gY2xvc2VkIik7"};
var id_section= new RMP_Section(conf);
id_widget.insertAbove(id_section);
* </listing>
* @class
* @classdesc Section widget
* @param {Object} conf JSON structure which contains the configuration of the section
  @extends RMP_CompositeWidget
 */
function RMP_Section( conf ){
	RMP_CompositeWidget.call( this, conf );

    /**
    * This function opens the section
    **/
	RMP_Section.prototype.open = function(){
    	this.openWithId(this.conf.id, this.conf.index);
    };

    /**
    * This function closes the section
    **/
    RMP_Section.prototype.close = function(){
    	this.closeWithId(this.conf.id, this.conf.index);
    };

    /**
    *  @return {boolean} returns "true" if the section is opened and "false" otherwise
    **/
    RMP_Section.prototype.isOpen = function(){
    	return this.isOpenWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets the label of the section widget
    *  @param {String} text
    **/
    RMP_Section.prototype.setLabel = function(text){
    	this.setLabelWithId(this.conf.id, this.conf.index, text);
    };

    /**
    * @return {String} returns the label of the section widget
    **/
    RMP_Section.prototype.getLabel = function(){
    	return this.getLabelWithId(this.conf.id, this.conf.index);
    };
    /**
     *   Insert a dynamic widget inside a section
     *   @method
     *   @param {object} widget The inserted widget
     */
    RMP_Section.prototype.insertInside = function(widget){
    	if( !widget.instantiated ){
    		widget.instantiate(widget.getType(),widget.conf);
    		widget.instantiated = true;
    	}
    	this.insertInsideWithId(this.conf.id, this.conf.index, widget.getName());
    };
}
RMP_Section.prototype = new RMP_CompositeWidget();
RMP_Section.prototype.getType = function(){return "RMP_Section";};
/** @private */
RMP_Section.prototype.openWithId = function( nameId, index ){};
/** @private */
RMP_Section.prototype.closeWithId = function( nameId, index ){};
/** @private */
RMP_Section.prototype.isOpenWithId = function( nameId, index ){};
/** @private */
RMP_Section.prototype.setLabelWithId = function( nameId, index, text ){};
/** @private */
RMP_Section.prototype.getLabelWithId = function( nameId, index ){};
/** @private */
RMP_Section.prototype.insertInsideWithId = function( nameId, index, insertedWidgetid ){};



/**
  @class
  @classdesc URL input widget
  @extends RMP_LabelledWidget
 */
function RMP_UrlInput( conf ){
	RMP_LabelledWidget.call( this, conf );

	/**
	* @return {String} Returns the url
	**/
    RMP_UrlInput.prototype.getUrl = function(){
    	return this.getUrlWithId(this.conf.id, this.conf.index);
    };

    /**
    * Sets the url
    * @param {String} url
    **/
    RMP_UrlInput.prototype.setUrl = function(url){
    	this.setUrlWithId(this.conf.id, this.conf.index,url);
    };
}
RMP_UrlInput.prototype = new RMP_LabelledWidget();
RMP_UrlInput.prototype.getType = function(){return "RMP_UrlInput";};
/** @private */
RMP_UrlInput.prototype.getUrlWithId = function( nameId, index ){};
/** @private */
RMP_UrlInput.prototype.setUrlWithId = function( nameId, index, url ){};

/**
 * @ignore
 * @class
 * @extends RMP_CompositeWidget
 */
function RMP_SectionWithListedItems( conf ){
	RMP_CompositeWidget.call( this, conf );

	/**
	* Sets the url
	* @param {String} url
	**/
	RMP_SectionWithListedItems.prototype.setUrl = function(url){
    	this.setUrlWithId(this.conf.id, this.conf.index, url);
    };

    /**
    * @return {String} Returns the url
    **/
    RMP_SectionWithListedItems.prototype.getUrl = function(){
    	return this.getUrlWithId(this.conf.id, this.conf.index);
    };

    /**
    * Opens a section
    **/
	RMP_SectionWithListedItems.prototype.open = function(){
    	this.openWithId(this.conf.id, this.conf.index);
    };

    /**
    *  Closes a section
    **/
    RMP_SectionWithListedItems.prototype.close = function(){
    	this.closeWithId(this.conf.id, this.conf.index);
    };

    /**
    * @return {boolean} returns "true" if a section is opened and "false" otherwise
    **/
    RMP_SectionWithListedItems.prototype.isOpen = function(){
    	return this.isOpenWithId(this.conf.id, this.conf.index);
    };
}
RMP_SectionWithListedItems.prototype = new RMP_CompositeWidget();
RMP_SectionWithListedItems.prototype.getType = function(){return "RMP_SectionWithListedItems";};
/** @private */
RMP_SectionWithListedItems.prototype.setUrlWithId = function( nameId, index, url ){};
/** @private */
RMP_SectionWithListedItems.prototype.getUrlWithId = function( nameId, index ){};
/** @private */
RMP_SectionWithListedItems.prototype.openWithId = function( nameId, index ){};
/** @private */
RMP_SectionWithListedItems.prototype.closeWithId = function( nameId, index ){};
/** @private */
RMP_SectionWithListedItems.prototype.isOpenWithId = function( nameId, index ){};


/**
 * @ignore
 * @class
 * @extends RMP_SectionWithListedItems
 */
function RMP_AppInstanceHistory( conf ){
	RMP_SectionWithListedItems.call( this, conf );
}
RMP_AppInstanceHistory.prototype = new RMP_SectionWithListedItems();
RMP_AppInstanceHistory.prototype.getType = function(){return "RMP_AppInstanceHistory";};

/**
 * @ignore
 */
function RMP_Comment( conf ){
	RMP_SectionWithListedItems.call( this, conf );
}
RMP_Comment.prototype = new RMP_SectionWithListedItems();
RMP_Comment.prototype = new RMP_CompositeWidget();
RMP_Comment.prototype.getType = function(){return "RMP_Comment";};


/**
  @class
  @classdesc Spinner widget
  @extends RMP_Image
 */
function RMP_Spinner( conf ){
	RMP_Image.call( this, conf );
}
RMP_Spinner.prototype = new RMP_Image();
RMP_Spinner.prototype.getType = function(){return "RMP_Spinner";};
/** @private */
RMP_Spinner.prototype.getTargetUrl = function(){};

/**
  @class
  @classdesc Captcha widget
  @extends RMP_ComponentWithVariables
 */
function RMP_Captcha( conf ){
	RMP_ComponentWithVariables.call( this, conf );
}
RMP_Captcha.prototype = new RMP_ComponentWithVariables();
RMP_Captcha.prototype.getType = function(){return "RMP_Captcha";};


/** Available column names for Application Report
* @memberof RMP_Report
* @enum {Object}
* @const
*/
RMP_AppliReport={
	/** Name of the application */
	NAME:"name",
	/** Publication date */
	PUBLISHED:"published",
	/** State of the application */
	STATE : "state",
	/** Age of the application */
	AGE : "age",
	/** Duration of the holding time */
	ONHOLD : "onhold",
	/** Owner of the application */
	OWNER : "owner",
	/** Contributor of the application */
	CONTRIBUTOR : "contributor"
};

/** Available column names for Process Report
* @memberof RMP_Report
* @enum {string}
* @const
*/
RMP_ProcessReport = {
	/** Name of the process */
	NAME : "name",
	/** Duration of the process */
	DURATION : "duration",
	/** Delay of the process */
	DELAY : "delay",
	/** Year of the process */
	YEAR : "year",
	/** Month of the process */
	MONTH : "month",
	/** Day of the process */
	DAY : "day",
	/** Id of the process */
	ID : "id",
	/** Parent of the process */
	PARENT : "parent",
	/** Publication date of the process */
	PUBLISHED : "published",
	/** Last update date of the process */
	UPDATED : "updated",
	/** Status of the process */
	STATUS : "status",
	/** Events of the process */
	EVENTS : "events",
	/** Owner of the process */
	OWNER : "owner",
	/** Contributor of the process */
	CONTRIBUTOR : "contributor"
};

/** Available operators for filter
* @memberof RMP_Report
* @enum {string}
* @const
*/
RMP_FilterOperator ={
	/** Equal  */
	EQUAL : "EE",
	/** Not equal  */
	NOT_EQUAL : "NE",
	/** Less than  */
	LESS_THAN : "LT",
	/** Greater than  */
	GREATER_THAN : "GT",
	/** Less than or equal  */
	LESS_THAN_EQUAL : "LTE",
	/** Greater than or equal  */
	GREATER_THAN_EQUAL : "GTE",
	/** Between  */
	BETWEEN : "BETWEEN",
	/** Contains  */
	CONTAINS : "CONTAINS",
	/** In  */
	IN : "IN",
	/** Not in  */
	NOT_IN : "NOT_IN"
};
               
/**
 * @class
 * @classdesc Report widget
 * @extends RMP_CompositeWidget
 */
function RMP_Report( conf ){
	RMP_CompositeWidget.call( this, conf );
	
	/**
	Set the title of the Report
	@param {String} title New title of the report
	*/
	RMP_Report.prototype.setTitle = function(title){
    	this.setTitleWithId(this.conf.id, this.conf.index, title);
    };
    /**
    Return the title of the report
    @return {String} Title of the report
    */
    RMP_Report.prototype.getTitle = function(){
    	return this.getTitleWithId(this.conf.id, this.conf.index);
    };
    /**
    Refresh the report
    @param {boolean} deep if false the resfresh will keep the pagination as well as the manual filters that have been input. True by default. 
    */
    RMP_Report.prototype.refresh = function(deep){
    	if( typeof(deep)=="undefined" ){
    		this.refreshWithId(this.conf.id, this.conf.index,true);
		}else{
			this.refreshWithId(this.conf.id, this.conf.index,deep);
		}
    };
    /**
    Add one filter to the column
    @param {RMP_Report.RMP_AppliReport | RMP_Report.RMP_ProcessReport} columnName  Column's name
    @param {RMP_Report.RMP_FilterOperator} operatorString  Operator of the filter
    @param {String} primaryValue Value of the filter
    @param {String} secondaryValue Second value (optional) of the filter
    @exception RunTimeException if the columnName is unknown
    @see {@link RMP_Report.RMP_AppliReport} for the application report column names
    @see {@link RMP_Report.RMP_ProcessReport} for the process report column names
    @see {@link RMP_Report.RMP_FilterOperator} for the available operators    */
   RMP_Report.prototype.addFilter = function (columnName, operatorString, primaryValue, secondaryValue){
        this.addFilterWithId(this.conf.id, this.conf.index, columnName, operatorString, primaryValue, secondaryValue);
   };
       /**
    Add one filter to the measure column
    @param {String} labelName  Column's label
    @param {RMP_Report.RMP_FilterOperator} operatorString  Operator of the filter
    @param {String} primaryValue Value of the filter
    @param {String} secondaryValue Second value (optional) of the filter
    @throws RunTimeException if the labelName is unknown
    @see {@link RMP_Report.RMP_AppliReport} for the application report column names
    @see {@link RMP_Report.RMP_ProcessReport} for the process report column names
    @see {@link RMP_Report.RMP_FilterOperator} for the available operators    */
   RMP_Report.prototype.addMeasureFilter = function (labelName, operatorString, primaryValue, secondaryValue){
        this.addMeasureFilterWithId(this.conf.id, this.conf.index, labelName, operatorString, primaryValue, secondaryValue);
   };
   /**
    Clear all filters of the column
    @param {RMP_Report.RMP_AppliReport | RMP_Report.RMP_ProcessReport} columnName Column's name
    @throws RunTimeException if the columnName is unknown
    */
   RMP_Report.prototype.clearFilter = function (columnName){
        this.clearFilterWithId(this.conf.id, this.conf.index, columnName);
   };
      /**
    Clear all filters of the column
    @param {String} columnLabel Column's label
    @throws RunTimeException if the columnLabel is unknown
    */
   RMP_Report.prototype.clearMeasureFilter = function (columnLabel){
        this.clearMeasureFilterWithId(this.conf.id, this.conf.index, columnLabel);
   };
   /**
   Gets the ids of all rows
   @return {Array} the JSONArray representing all the values
   */
   RMP_Report.prototype.getRowsId = function(){
       return JSON.parse(this.getRowsIdWithId(this.conf.id, this.conf.index));
   };
   /**
   Select the row that have the given rowIndex
   @param {String} rowIndex row's index
   */
   RMP_Report.prototype.select = function(rowIndex){
       this.selectWithId(this.conf.id, this.conf.index, rowIndex);
   };
   /**
   Unselect the row that have the given rowIndex
   @param {String} rowIndex row's index
   */
   RMP_Report.prototype.unselect = function(rowIndex){
       this.unselectWithId(this.conf.id, this.conf.index, rowIndex);
   };
   /**
   Select all rows
   */
   RMP_Report.prototype.selectAll = function(){
       this.selectAllWithId(this.conf.id, this.conf.index);
   };
   /**
   Unselects all rows
   */
   RMP_Report.prototype.unselectAll = function(){
       this.unselectAllWithId(this.conf.id, this.conf.index);
   };
   /**
   gets the selected rows Id
   @return {Array} the JSONArray representing the ids [id, ...]
   */
   RMP_Report.prototype.getSelectedRowsIds = function(){
       return JSON.parse(this.getSelectedRowsIdsWithId(this.conf.id, this.conf.index));
   };
   /**
   Gets the value of the given row, for the given column
   @param {String} rowId row's index
   @param {RMP_Report.RMP_AppliReport | RMP_Report.RMP_ProcessReport} column the concerned column name
   @see {@link RMP_Report.RMP_AppliReport} for the application report column names
   @see {@link RMP_Report.RMP_ProcessReport} for the process report column names
   @return {String} string value
   */
   RMP_Report.prototype.getRowValue = function(rowIndex, column){
       return this.getRowValueWithId(this.conf.id, this.conf.index, rowIndex, column);
   };
   /**
   Gets all the values of the given row
   @param {String} rowId row's id
   @return {Array} the JSONObject representing the values {column : value, ...}
   */
   RMP_Report.prototype.getRowAllValues = function(rowIndex){
       return JSON.parse(this.getRowAllValuesWithId(this.conf.id, this.conf.index, rowIndex));
   };
   /**
   Gets all the values of the set of selected rows
   Formerly 'getSelectedValues' but too close to another function.
   @return {Array} the JSONArray of JSONObjects representing the values [{column : value, ...}, ...]
   */
   RMP_Report.prototype.getSelectedLinesValues = function(){
       return JSON.parse(this.getSelectedValuesWithId(this.conf.id, this.conf.index));
   };
   /**
   Gets all the values of the set of rows
   @return {Array} the JSONArray of JSONObjects representing the values [{column : value, ...}, ...]
   */
   RMP_Report.prototype.getAllValues = function(){
       return JSON.parse(this.getAllValuesWithId(this.conf.id, this.conf.index));
   };
   /**
    * allows you to add a given css to your web interface 
    * @param {String} cssRule
    * @example
 	*  <listing>
 	*    id_report.addCssRule(".Button{text-indent:20px;}"))
 	*  </listing>
    */
   RMP_Report.prototype.addCssRule = function(cssRule){
       this.addCssRuleWithId(this.conf.id, this.conf.index, cssRule);
   };
   /**
   Sets an additional css class name to the given row
   @param {String} rowId the name of the column to affect
   @param {String} className the class to set for the given row
   */
   RMP_Report.prototype.addRowStyle = function(rowIndex, className){
       this.addRowStyleWithId(this.conf.id, this.conf.index, rowIndex, className);
   };
   /**
   Sets the width of the given column
   @param {RMP_Report.RMP_AppliReport | RMP_Report.RMP_ProcessReport} columnName the column to resize
   @param {String} width the integer representing the column's width in px
   @see {@link RMP_Report.RMP_AppliReport} for the application report column names
   @see {@link RMP_Report.RMP_ProcessReport} for the process report column names
   */
   RMP_Report.prototype.resizeColumn = function(columnName, width){
       this.resizeColumnWithId(this.conf.id, this.conf.index, columnName, width);
   };
   /**
   Gets the current range of rows displayed by the widget
   @return {Array} the JSONArray representing this range : [firstItem, lastItem]
   */
   RMP_Report.prototype.getCurrentRange = function(){
       return JSON.parse(this.getCurrentRangeWithId(this.conf.id, this.conf.index));
   };
   /**
   Gets the current row count, using filters
   @return {String} the number of rows.
   */
   RMP_Report.prototype.getRowCount = function(){
       return this.getRowCountWithId(this.conf.id, this.conf.index);
   };
   /**
   Sets the rule for the given the calculated row
   @param {String} columnName the column to affect
   @param {String} rule the rule to set. Inserting inside the rule patterns like [[column_name]] let you refer to the value of the cell of the column_name column for the concerning row.
   */
   RMP_Report.prototype.setCalculatedColumnRule = function(columnName, rule){
       this.setCalculatedColumnRuleWithId(this.conf.id, this.conf.index, columnName, rule);
   };
	/**
    * Sets a script that will be executed after the loading of the report
    * @param {String} script
    **/
   RMP_Report.prototype.setPostLoadedScript = function(script){
	   this.setPostLoadedScriptWithId(this.conf.id, this.conf.index, script);
   };
   /**
    * @param {String} columnName the name of the column to be set visible.
	* @param {boolean} visible visibility of the column.
    */
   RMP_Report.prototype.setColumnVisible = function(columnName, visible){
	   this.setColumnVisibleWithId(this.conf.id, this.conf.index, columnName, visible);
   };
   /**
   	    Set the query  of Collection Report
   	    @param {String} query New query of collection report
   	*/
   	RMP_Report.prototype.setQuery = function(query){
       	this.setQueryWithId(this.conf.id, this.conf.index, query);
    };
    /**
        Return the query of the report
        @return {String} Query of the report
    */
    RMP_Report.prototype.getQuery = function(){
        return this.getQueryWithId(this.conf.id, this.conf.index);
    };

    /**
     Set the aggregation pipelines of Collection Report
     @param {String} aggregate New aggregation pipelines of collection report
     */
    RMP_Report.prototype.setAggregate = function(aggregate){
        this.setAggregateWithId(this.conf.id, this.conf.index, aggregate);
    };
    /**
     Return the aggregation pipelines of the report
     @return {String} Aggregation pipelines of the report (json array)
     */
    RMP_Report.prototype.getAggregate = function(){
        return this.getAggregateWithId(this.conf.id, this.conf.index);
    };
    
    /**
	    Set the header of a report column
	    @param {String} columnName the name of the column to modify
	    @param {String} header the new header
	*/
	RMP_Report.prototype.setColumnHeader = function(columnName, header){
	   	this.setColumnHeaderWithId(this.conf.id, this.conf.index, columnName, header);
	};
	/**
	    Get the header of a report column
	    @param {String} columnName the name of the report column
		@returns {String}
	*/
	RMP_Report.prototype.getColumnHeader = function(columnName){
	   	return this.getColumnHeaderWithId(this.conf.id, this.conf.index, columnName);
	};
	/**
	    Set the header of a report column
	    @param {String} columnIndex the index of the column to modify
	    @param {String} header the new header
	*/
	RMP_Report.prototype.setColumnHeaderByIndex = function(columnIndex, header){
	   	this.setColumnHeaderByIndexWithId(this.conf.id, this.conf.index, columnIndex, header);
	};
	/**
	    Get the header of a report column
	    @param {String} columnIndex the index of the report column
		@returns {String}
	*/
	RMP_Report.prototype.getColumnHeaderByIndex = function(columnIndex){
	   	return this.getColumnHeaderByIndexWithId(this.conf.id, this.conf.index, columnIndex);
	};
	
	/**
    Get the url used to load the report
	@returns {String}
	*/
	RMP_Report.prototype.getReportLink = function(){
	   	return this.getReportLinkWithId(this.conf.id, this.conf.index);
	};
	
	/**
    Set the url used to load the report
	@param {String} link report resource url
	*/
	RMP_Report.prototype.setReportLink = function(link){
	   	this.setReportLinkWithId(this.conf.id, this.conf.index,link);
	};
	
	/**
	 * Fills the report with a JSON object
     * @param {object} data The JSON object used to fill the report
     * @param {object} options options to be used to fill the report
     * @example
	 *  <listing>
	 *    var data = [{"column1":"valueA","column2":"valueB"},{"column1":"valueC","column2":"valueD"}];
	 *    var options = {count:2,first:0};
	 *    id_report.setData(data,options);
	 *  </listing>
	 */
	RMP_Report.prototype.setData = function(data,options){
	   	this.setDataWithId(this.conf.id, this.conf.index,data,options);
	};
	/**
	 * Displays the report spinner while loading data
	 * @param {boolean} loading displays the spinner if true or hides it otherwise 
	 */
	RMP_Report.prototype.setLoading = function(loading){
	   	this.setLoadingWithId(this.conf.id, this.conf.index,loading);
	};
	/**
	 * Get an array that contains the applied filters
	 * @param {boolean} encoded returns the encoded filter values if true or raw values otherwise
	 * @return {object}
	 */
	RMP_Report.prototype.getFilters = function(encoded){
		if( typeof(encoded)=="undefined" ){
			return this.getFiltersWithId(this.conf.id, this.conf.index,false);
		}else{
			return this.getFiltersWithId(this.conf.id, this.conf.index,encoded);
		}
	};
	/**
	 * Get an array that contains the sorted columns
	 * @return {object}
	 */
	RMP_Report.prototype.getSortedColumns = function(){
	   	return this.getSortedColumnsWithId(this.conf.id, this.conf.index);
	};
	
	/**
    * @returns {boolean} true if the report has already been loaded, false otherwise
    **/
	RMP_Report.prototype.isLoaded = function(){
    	return this.isLoadedWithId(this.conf.id, this.conf.index);
    };
    
    /**
     * @returns {boolean} true if the report is loading data, false otherwise
     **/
 	RMP_Report.prototype.isLoading = function(){
     	return this.isLoadingWithId(this.conf.id, this.conf.index);
     };

    /**
	 * Get the latest selected row of the report
     * @returns {object} return the latest selected row or null if the latest user action has deselected a row

     **/
    RMP_Report.prototype.getLatestSelectedLineValues = function(){
        return this.getLatestSelectedLineValuesWithId(this.conf.id, this.conf.index);
    };
}
RMP_Report.prototype = new RMP_CompositeWidget();
RMP_Report.prototype.getType = function(){return "RMP_Report";};
/** @private */
RMP_Report.DYNAMIC_COUNT = -1;
/** @private */
RMP_Report.prototype.setTitleWithId = function( nameId, index, title ){};
/** @private */
RMP_Report.prototype.getTitleWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.getUrlWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.refreshWithId = function( nameId, index, deep ){};
/** @private */
RMP_Report.prototype.addMeasureFilterWithId = function(reportName, reportIndex, labelName, operatorString, valueString){};
/** @private */
RMP_Report.prototype.clearMeasureFilterWithId = function(reportName, reportIndex, columnLabel){};
/** @private */
RMP_Report.prototype.getRowsIdWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.selectWithId = function( nameId, index, rowIndex ){};
/** @private */
RMP_Report.prototype.unselectWithId = function( nameId, index, rowIndex ){};
/** @private */
RMP_Report.prototype.selectAllWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.unselectAllWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.getSelectedRowsIdsWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.getRowValueWithId = function( nameId, index, rowIndex, column ){};
/** @private */
RMP_Report.prototype.getRowAllValuesWithId = function( nameId, index, rowIndex){};
/** @private */
RMP_Report.prototype.getSelectedValuesWithId = function( nameId, index){};
/** @private */
RMP_Report.prototype.getAllValuesWithId = function( nameId, index){};
/** @private */
RMP_Report.prototype.addCssRuleWithId = function( nameId, index, cssRule){};
/** @private */
RMP_Report.prototype.addRowStyleWithId = function( nameId, index, rowIndex, className){};
/** @private */
RMP_Report.prototype.resizeColumnWithId = function( nameId, index, columnName, width){};
/** @private */
RMP_Report.prototype.getCurrentRangeWithId = function( nameId, index){};
/** @private */
RMP_Report.prototype.getRowCountWithId = function( nameId, index){};
/** @private */
RMP_Report.prototype.setCalculatedColumnRuleWithId = function( nameId, index, columnName, rule){};
/** @private */
RMP_Report.prototype.setPostLoadedScriptWithId = function( nameId, index, script ){};
/** @private */
RMP_Report.prototype.setColumnVisibleWithId = function( nameId, index, columnName, visible ){};
/** @private */
RMP_Report.prototype.setQueryWithId = function( nameId, index, query ){};
/** @private */
RMP_Report.prototype.getQueryWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.setColumnHeaderWithId = function( nameId, index, columnName, header ){};
/** @private */
RMP_Report.prototype.getColumnHeaderWithId = function( nameId, index, columnName ){};
/** @private */
RMP_Report.prototype.setColumnHeaderByIndexWithId = function( nameId, index, columnIndex, header ){};
/** @private */
RMP_Report.prototype.getColumnHeaderByIndexWithId = function( nameId, index, columnIndex ){};
/** @private */
RMP_Report.prototype.setAggregateWithId = function( nameId, index, aggregate ){};
/** @private */
RMP_Report.prototype.getAggregateWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.getColumnHeaderByIndexWithId = function( nameId, index, columnIndex ){};
/** @private */
RMP_Report.prototype.getReportLinkWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.setReportLinkWithId = function( nameId, index, link ){};
/** @private */
RMP_Report.prototype.setDataWithId = function( nameId, index, data, options ){};
/** @private */
RMP_Report.prototype.setLoadingWithId = function( nameId, index, loading ){};
/** @private */
RMP_Report.prototype.getFiltersWithId = function( nameId, index, encoded ){};
/** @private */
RMP_Report.prototype.getSortedColumnsWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.isLoadedWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.isLoadingWithId = function( nameId, index ){};
/** @private */
RMP_Report.prototype.getLatestSelectedLineValuesWithId = function( nameId, index ){};


/**
  @class
  @classdesc API listener component
  @extends RMP_Component
 */
function RMP_ListenerComponent( conf ){
	RMP_Component.call( this, conf );
	
	RMP_ListenerComponent.prototype.getListenerUrl = function(){
    	return this.getListenerUrlWithId(this.conf.id, this.conf.index);
    };
    /** @private */
    RMP_ListenerComponent.prototype.getQueryStringMap = function( url ) {
    	var map = {};
        var vars = url.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            map[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]?pair[1]:"");
        }
        return map;
    };
    /** @private */
    RMP_ListenerComponent.prototype.optValue = function( options, key, defaultValue ) {
        if( options &&  (key in options) ) return options[key];
        else return defaultValue;
    };
	/**
	 * This callback is called when the listener is completed
	 * @callback RMP_ListenerComponent~successCallback
	 * @param {Object} P_computed contains the output of the listener
	 */
	 /**
	 * This callback is called when the listener fails
	 * @callback RMP_ListenerComponent~failureCallback
	 * @param {Object} P_error contains the potential error generated during the listener execution 
	 */
	/**
	 * Trigger the execution of a composite API or a connector
	 * @param {object} input the input parameters
	 * @param {object} options options to be used during the call
	 * @param {RMP_ListenerComponent~successCallback} successCallback a callback function called in case of a success
	 * @param {RMP_ListenerComponent~failureCallback} failureCallback a callback function called in case of a failure
	 * @example
	 * <listing>
		function ok(P_computed){
			alert(JSON.stringify(P_computed));
		}
			
		function ko(P_error){
	    	alert(JSON.stringify(P_error));
		}
			
		var input = {"input_1":"value_1","input_2":"value_2"};
	    // input could be: var input = RMPApplication.getAllVariablesValues();
		
		var options = {"mode":"TEST","version":"7347","asynchronous":true};
		// or simply var options = {}; to execute the composite API in the mode and the version used by the current web interface
		
		id_api.trigger(input,options,ok,ko);
	   </listing>
	 */
	RMP_ListenerComponent.prototype.trigger = function( input, options, successCallback, failureCallback ){
		var url = this.getListenerUrl();
		var urlParts = url.split('?');
		var rawUrl = urlParts[0];
		var defaultQueryString = urlParts[1];
		var queryStringMap = this.getQueryStringMap(defaultQueryString);
		
		var pMode = this.optValue( options, "mode", queryStringMap['P_mode']);
		var pVersion = this.optValue( options, "version", queryStringMap['P_version']);
		var queryString = 'P_mode='+encodeURIComponent(pMode)+'&P_version='+encodeURIComponent(pVersion);
		var asynch = this.optValue( options, "asynchronous", true );
		if(!asynch){
			try{ console.warn("Synchronous requests have been deprecated by some browser vendors, their support may be completely removed in next releases!");}catch(er){}
		}

		if( (typeof Prototype == 'undefined' && typeof jQuery == 'undefined') ||
			(RMPApplication.isPortal2Application() && typeof jQuery == 'undefined') ){
			// use restlet to make the trigger request
			this.triggerWithId(this.conf.id, this.conf.index, rawUrl+"?"+queryString, input, successCallback, failureCallback );

			if( !asynch && RMPApplication.isPortal2Application() ){
				try{ console.warn("jQuery is mandatory to trigger synchronous API listeners!");}catch(er){}
			}

		} else {
			var listener = this;
			var body = JSON.stringify(input ? input : {});
			RMPApplication.doAjaxRequest(RMPApplication.getBaseUrl()+rawUrl+"?"+queryString, {
				method:"post",
				asynchronous: asynch,
				requestHeaders: ['Accept', 'application/json'],
				contentType: 'application/json',
				postBody: body,
				onSuccess: function(response) {
					try{
						successCallback(response.responseJSON);
					}catch(error){
						listener.handleCallbackErrorWithId(listener.conf.id, listener.conf.index,error.message,true);
					}
				},
				onFailure: function(response) {
					try{
						failureCallback(JSON.parse(response.responseText));
					}catch(error){
						listener.handleCallbackErrorWithId(listener.conf.id, listener.conf.index,error.message,false);
					}
				}
			});
		}
    };
}
RMP_ListenerComponent.prototype = new RMP_Component();
RMP_ListenerComponent.prototype.getType = function(){return "RMP_ListenerComponent";};
/** @private */
RMP_ListenerComponent.prototype.getListenerUrlWithId = function( nameId, index ){};
/** @private */
RMP_ListenerComponent.prototype.handleCallbackErrorWithId = function( nameId, index, error, success ){};
/** @private */
RMP_ListenerComponent.prototype.triggerWithId = function( nameId, index, url, input, successCallback, failureCallback ){};
/** @private */
RMP_ListenerComponent.prototype.getContainerIndex = function() {};
/** @private */
RMP_ListenerComponent.prototype.getParent = function() {};
/** @private */
RMP_ListenerComponent.prototype.isIndexed = function() {};

/**
  @class
  @classdesc Custom widget
  @extends RMP_CompositeWidget
 */
function RMP_CustomWidget( conf ){
	RMP_CompositeWidget.call( this, conf );

	/**
	* this function loads custom widget (only possible once)
	**/
	RMP_CustomWidget.prototype.load = function(){
    	return this.loadWithId(this.conf.id, this.conf.index);
    };

    /**
    * @returns {boolean} true if custom widget has already been loaded
    **/
    RMP_CustomWidget.prototype.isLoaded = function(){
    	return this.isLoadedWithId(this.conf.id, this.conf.index);
    };
}
RMP_CustomWidget.prototype = new RMP_CompositeWidget();
RMP_CustomWidget.prototype.getType = function(){return "RMP_CustomWidget";};
/** @private */
RMP_CustomWidget.prototype.loadWithId = function( nameId, index ){};
/** @private */
RMP_CustomWidget.prototype.isLoadedWithId = function( nameId, index ){};


/** Available column names for History
* @memberof RMP_History
* @enum {string}
* @const
*/
RMP_HistoryColumns ={
	/** The screen of the application  */
	STATE : "state",
	/** The author */
	AUTHOR : "author",
	/** Tje email of the author */
	EMAIL : "email",
	/** The publication date */
	PUBLISHED : "published",
	/** The modification date */
	UPDATED : "updated"
};


/**
 * @class
 * @classdesc History and Comments widget
 * @extends RMP_CompositeWidget
 */
function RMP_History( conf ){
	RMP_CompositeWidget.call( this, conf );
	
	RMP_History.prototype.setHeight = function(height){
		this.setHeightWithId(this.conf.id, this.conf.index, height);
	};
	RMP_History.prototype.refresh = function(){
		this.refreshWithId(this.conf.id, this.conf.index);
	};
	/**
	 * Returns true if the user has added a comment, false otherwise
	 * @returns {boolean}
	 */
	RMP_History.prototype.isCommented = function(){
		return this.isCommentedWithId(this.conf.id, this.conf.index);
	};
	/**
	 * @returns {String} The comment that is now inside the widget
	 */
	RMP_History.prototype.getComment = function(){
		return this.getCommentWithId(this.conf.id, this.conf.index);
	};
	/**
	 * @returns {Array} The JSONArray of JSONObjects representing the values [{field:value}, ...]
	 */
	RMP_History.prototype.getHistoryRow = function(rowIndex){
		return JSON.parse(this.getHistoryRowWithId(this.conf.id, this.conf.index, rowIndex));
	};
	/**
	 * @returns {Array} The JSONArray of JSONArrays of JSONObjects representing the values [[{column : value}, ...], ...]
	 */
	RMP_History.prototype.getCompleteHistory = function(){
		return JSON.parse(this.getCompleteHistoryWithId(this.conf.id, this.conf.index));
	};
	/**
	 * @returns {String} The Url where the widget gets its data.
	 */
	RMP_History.prototype.getUrl = function(){
		return this.getUrlWithId(this.conf.id, this.conf.index);
	};
	RMP_History.prototype.setUrl = function(url){
		return this.setUrlWithId(this.conf.id, this.conf.index, url);
	};
	RMP_History.prototype.open = function(){
		return this.openWithId(this.conf.id, this.conf.index);
	};
	RMP_History.prototype.close = function(){
		return this.closeWithId(this.conf.id, this.conf.index);
	};
	/**
	 * @returns {boolean} true if the widget is open.
	 */
	RMP_History.prototype.isOpen = function(){
		return this.isOpenWithId(this.conf.id, this.conf.index);
	};
	/**
	 * Determines whether or not a column is visible.
	 * @param {String} columnIndex the index of the column
	 * @returns {boolean} true if the widget is visible, false otherwise
	 */
	RMP_History.prototype.getColumnVisibility = function(columnIndex){
		return this.getColumnVisibilityWithId(this.conf.id, this.conf.index,columnIndex);
	};
	
	/**
	 * Shows or hides a given column
	 * @param {String} columnIndex the index of the column to be set visible, (columnIndex starts at '0')
	 * @param {boolean} visible
	 */
	RMP_History.prototype.setColumnVisibility = function(columnIndex,visible){
		return this.setColumnVisibilityWithId(this.conf.id, this.conf.index,columnIndex,visible);
	};
}
RMP_History.prototype = new RMP_CompositeWidget();
RMP_History.prototype.getType = function(){return "RMP_History";};
/**@private*/
RMP_History.prototype.setHeightWithId = function(nameId, index, height){};
/**@private*/
RMP_History.prototype.refreshWithId = function(nameId, index){};
/**@private*/
RMP_History.prototype.isCommentedWithId = function(nameId, index){};
/**@private*/
RMP_History.prototype.getCommentWithId = function(nameId, index){};
/**@private*/
RMP_History.prototype.getHistoryRowWithId = function(nameId, index, rowIndex){};
/**@private*/
RMP_History.prototype.getCompleteHistoryWithId = function(nameId, index){};
/**@private*/
RMP_History.prototype.getUrlWithId = function(nameId, index){};
/**@private*/
RMP_History.prototype.setUrlWithId = function(nameId, index, url){};
/**@private*/
RMP_History.prototype.openWithId = function(nameId, index){};
/**@private*/
RMP_History.prototype.closeWithId = function(nameId, index){};
/**@private*/
RMP_History.prototype.isOpenWithId = function(nameId, index){};
/**@private*/
RMP_History.prototype.getColumnVisibilityWithId = function(nameId, index,columnIndex){};
/**@private*/
RMP_History.prototype.setColumnVisibilityWithId = function(nameId, index,columnIndex,visible){};


/**
 @class
 @extends RMP_Component
 @classdesc Included collections are non visible component used to get/save/remove/update objects from a collection
 @see {@link http://docs.mongodb.org/manual/| MongoDB documentation}
 */
function RMP_IncludedCollection( conf ){
	RMP_Component.call( this, conf );
	
    /**@private*/
    RMP_IncludedCollection.prototype.showSuccessMessage = function( message ) {
        var title = document.title;
        return function( response ) {
            if( message != null ) {
                RMPApplication.showErrorBox( title, message );
            }
        };
    };
    /**@private*/
    RMP_IncludedCollection.prototype.showFailureMessage = function( message ) {
        var title = document.title;
        return function( response ) {
            if( message != null ) {
                var errorMessage = null;
                if( response != null && response.responseJSON != null ) {
                    errorMessage = response.responseJSON.error;
                }
                if( errorMessage != null ) message = message + " ("+errorMessage+")";
                RMPApplication.showErrorBox( title, message );
            }
        };
    };

    /**@private*/
    RMP_IncludedCollection.prototype.optValue = function( options, key, defaultValue ) {
        if( options &&  (key in options) ) return options[key];
        else return defaultValue;
    };

    /**@private*/
    RMP_IncludedCollection.prototype.request = function( parameters, method, body, onsuccess, onfailure ) {
        var url = this.getAccessUrlWithId( this.conf.id, this.conf.index );
        this.doRequest( url, parameters, method, body, onsuccess, onfailure );
    };

    /**@private*/
    RMP_IncludedCollection.prototype.request_aggreg = function( parameters, method, body, onsuccess, onfailure ) {
        var url = this.getAggregateUrlWithId( this.conf.id, this.conf.index );
        this.doRequest( url, parameters, method, body, onsuccess, onfailure );
    };

    /**@private*/
    RMP_IncludedCollection.prototype.doRequest = function( url, parameters, method, body, onsuccess, onfailure ) {
        var asynch = this.optValue( parameters, "asynchronous", true );
        delete parameters.asynchronous;
		
		// Delete the double quotes that surround regex that uses // delimiters
        body = this.finalizeNotOperator(body);
		parameters['P_query'] = this.finalizeNotOperator(parameters['P_query']);
		
        var queryString = Object.hasOwnProperty('toQueryString') ? Object.toQueryString(parameters) : jQuery.param(parameters,true);
        
        RMPApplication.doAjaxRequest( url+"?"+queryString, {
              method:method,
              asynchronous: asynch,
              requestHeaders: ['Accept', 'application/json'],
              contentType: 'application/json',
              postBody: body ? body : null,
              onSuccess: function(response) {
                    return onsuccess(response.responseJSON);
              },
              onFailure: function(response) {
                  return onfailure(response);
              }
        });
    };

    /**@private*/
    RMP_IncludedCollection.prototype.GET = function( parameters, onsuccess, onfailure ) {
        this.request( parameters, 'get', null, onsuccess, onfailure );
    };
    /**@private*/
    RMP_IncludedCollection.prototype.PUT = function( parameters, body, onsuccess, onfailure ) {
        parameters.method = "PUT";
        this.request( parameters, 'post', body, onsuccess, onfailure );
    };
    /**@private*/
    RMP_IncludedCollection.prototype.POST = function( parameters, body, onsuccess, onfailure ) {
        this.request( parameters, 'post', body, onsuccess, onfailure );
    };
    /**@private*/
    RMP_IncludedCollection.prototype.POST_AGGREG = function( parameters, body, onsuccess, onfailure ) {
        this.request_aggreg( parameters, 'post', body, onsuccess, onfailure );
    };
    /**@private*/
    RMP_IncludedCollection.prototype.DELETE = function( parameters, onsuccess, onfailure ) {
        parameters.method = "DELETE";
        this.request( parameters, 'post', null, onsuccess, onfailure );
    };
    /**@private*/
    RMP_IncludedCollection.prototype.firstObjectOf = function( callback ) {
        return function( response ) {
            if( response instanceof Array ) callback( response[0] );
            else callback( response );
        };
    };
    /**
     *   Load the first object of the collection, matching the given pattern.
     *  @see {@link http://docs.mongodb.org/manual/core/read-operations/| MongoDB Read Operations documentation}
     *   @method
     *   @param {object} pattern object to be retrieved in the collection.
     *   @param {object} options options to be used during the call. Same fields as #listExt options. options.nb will be set to 1 and options.first will be set to 0.
     *   @see RMP_IncludedCollection#listExt
     */
    RMP_IncludedCollection.prototype.loadExt = function( pattern, options ) {
        options.nb = 1;
        options.first = 0;
        options.onSuccess = this.firstObjectOf(options.onSuccess);
        return this.listExt( pattern, options );
    };

    /**
     *   Load the first object of the collection, matching the given pattern
     *   @method
     *   @param {object} pattern object to be retrieved in the collection.
     *   @param {object} options options to be used during the call. Same fields as #listExt options, except for the callbacks.
     *   @param {RMP_IncludedCollection~loadCallbackSuccess} callbackSuccess - callback to be used in case of a success
     *   @param {String} messageFailure message displayed in case of a failure
     *   @see RMP_IncludedCollection#listExt
     */
    RMP_IncludedCollection.prototype.load = function( pattern, options, callbackSuccess, messageFailure ) {
        options.onSuccess = callbackSuccess;
        options.onFailure = this.showFailureMessage( messageFailure );
        this.loadExt( pattern, options );
    };

    /**
     *   Load the first object of the collection, matching the given pattern
     *   @method
     *   @param {object} pattern object to be retrieved in the collection.
     *   @param {object} options options to be used during the call. Same fields as #listExt options, except for the callbacks.
     *   @param {RMP_IncludedCollection~loadCallbackSuccess} callbackSuccess - callback to be used in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} callbackFailure - a callback function called in case of a failure
     *   @see RMP_IncludedCollection#listExt
     */
    RMP_IncludedCollection.prototype.loadCallback = function( pattern, options, callbackSuccess, callbackFailure ) {
        options.onSuccess = callbackSuccess;
        options.onFailure = callbackFailure;
        this.loadExt( pattern, options );
    };

    /**
     *   List objects matching a given pattern.
     *  @see {@link http://docs.mongodb.org/manual/core/read-operations/|MongoDB Read Operations documentation }
     *   @method
     *   @param {object} pattern pattern to be matched in the collection
     *   @param {object} options options to be used during the call
     *   @param {object} options.fields - array of fields to be retrieved for each found object, e.g [name, lastname]
     *   @param {string} options.mode - execution mode of the collection (TEST or LIVE), defaults to the current execution mode of the application
     *   @param {number} options.nb - number of objects to be returned (maximum is 100), used to paginate results
     *   @param {number} options.first - index of the first object to be returned, used to paginate results
     *   @param {array} options.orderby -  array of fields to be used to order the results, e.g [name, lastname]
     *   @param {array} options.order - array of orders to be used to order the results, there must be one order for each orderby, e.g [asc,desc]
     *   @param {boolean} options.detailed - true to get a detailed result (includes count limit and skip values)
     *   @param {boolean} options.asynchronous - false to make a synchronous call, true otherwise (default is true)
     *   @param {RMP_IncludedCollection~callbackSuccess} options.onSuccess - a callback function called in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} options.onFailure - a callback function called in case of a failure
     */
    RMP_IncludedCollection.prototype.listExt = function( pattern, options ) {
        var parameters = {  'P_field': this.optValue( options, "fields", [] ),
                            'P_query': pattern ? JSON.stringify(pattern) : '{}',
                            'P_mode': this.optValue( options, "mode", RMPApplication.getExecutionMode()),
                            'P_nb': this.optValue( options, "nb", 100 ),
                            'P_first': this.optValue( options, "first", 0 ),
                            'P_orderby': this.optValue( options, "orderby", []),
                            'P_order': this.optValue( options, "order", []),
                            'P_detail': this.optValue( options, "detailed", false),
                            'asynchronous': this.optValue( options, "asynchronous", true )
        };
        this.GET(  parameters, options.onSuccess, options.onFailure );
    };

    /**
     *   List objects matching a given pattern
     *   @method
     *   @param {object} pattern pattern to be matched in the collection
     *   @param {object} options option to be used during the call. Same fields as #listExt options, except for the callbacks.
     *   @param {RMP_IncludedCollection~callbackSuccess} callbackSuccess - a callback function called in case of a success
     *   @param {String} messageFailure message displayed in case of a failure
     *   @see RMP_IncludedCollection#listExt
     */
    RMP_IncludedCollection.prototype.list = function( pattern, options, callbackSuccess, messageFailure ) {
        options.onSuccess = callbackSuccess;
        options.onFailure = this.showFailureMessage( messageFailure );
        this.listExt( pattern, options );
    };

    /**
     *   List objects matching a given pattern
     *   @method
     *   @param {object} pattern pattern to be matched in the collection
     *   @param {object} options option to be used during the call. Same fields as #listExt options, except for the callbacks.
     *   @param {RMP_IncludedCollection~callbackSuccess} callbackSuccess - a callback function called in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} callbackFailure - a callback function called in case of a failure
     *   @see RMP_IncludedCollection#listExt
     */
    RMP_IncludedCollection.prototype.listCallback = function( pattern, options, callbackSuccess, callbackFailure ) {
        options.onSuccess = callbackSuccess;
        options.onFailure = callbackFailure;
        this.listExt( pattern, options );
    };

    /**
     *   Remove objects matching a given pattern
     *  @see {@link https://docs.mongodb.com/v3.0/core/write-operations/| MongoDB Write Operations documentation}
     *   @method
     *   @param {object} pattern pattern to be matched in the collection
     *   @param {object} options option to be used during the call
     *   @param {string} options.mode - execution mode of the collection (TEST or LIVE), defaults to the current execution mode of the application
     *   @param {boolean} options.asynchronous - false to make a synchronous call, true otherwise (default is true)
     *   @param {RMP_IncludedCollection~countCallbackSuccess} options.onSuccess - a callback function called in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} options.onFailure - a callback function called in case of a failure
     */
    RMP_IncludedCollection.prototype.removeExt = function( pattern, options ) {
        var parameters = {  'P_query': pattern ? JSON.stringify(pattern) : '{}',
                            'P_mode': this.optValue( options, "mode", RMPApplication.getExecutionMode()),
                            'asynchronous': this.optValue( options, "asynchronous", true )
        };
        this.DELETE(  parameters, options.onSuccess, options.onFailure );
    };

    /**
     *   Remove objects matching a given pattern
     *   @method
     *   @param {object} pattern pattern to be matched in the collection
     *   @param {String} messageSuccess message displayed in case of a success
     *   @param {String} messageFailure message displayed in case of a failure
     *   @see RMP_IncludedCollection#removeExt
     */
    RMP_IncludedCollection.prototype.remove = function( pattern, messageSuccess, messageFailure ) {
        this.removeExt( pattern, {
            onSuccess: this.showSuccessMessage( messageSuccess ),
            onFailure : this.showFailureMessage(  messageFailure )
        });
    };

    /**
     *   Remove objects matching a given pattern
     *   @method
     *   @param {object} pattern pattern to be matched in the collection
     *   @param {RMP_IncludedCollection~countCallbackSuccess} callbackSuccess - a callback function called in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} callbackFailure - a callback function called in case of a failure
     *   @see RMP_IncludedCollection#removeExt
     */
    RMP_IncludedCollection.prototype.removeCallback = function( pattern, callbackSuccess, callbackFailure ) {
        this.removeExt( pattern, {
            onSuccess : callbackSuccess,
            onFailure : callbackFailure
        });
    };


    /**
     *   Save an object to the collection.
     *   @see {@link https://docs.mongodb.com/v3.0/core/write-operations/| MongoDB Write Operations documentation}
     *   @method
     *   @param {object} object the object to be saved
     *   @param {object} options options to be used during the call
     *   @param {string} options.mode - execution mode of the collection (TEST or LIVE), defaults to the current execution mode of the application
     *   @param {boolean} options.asynchronous - false to make a synchronous call, true otherwise (default is true)
     *   @param {RMP_IncludedCollection~saveCallbackSuccess} options.onSuccess - a callback function called in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} options.onFailure - a callback function called in case of a failure
     */
    RMP_IncludedCollection.prototype.saveExt = function( object, options ) {
        var body = JSON.stringify(object);
        var parameters = {  'P_mode': this.optValue( options, "mode", RMPApplication.getExecutionMode()),
                            'asynchronous': this.optValue( options, "asynchronous", true )
        };
        this.POST(  parameters, body, options.onSuccess, options.onFailure );
    };

    /**
     *   Save an object to the collection
     *   @method
     *   @param {object} object the object to be saved
     *   @param {String} messageSuccess message displayed in case of a success
     *   @param {String} messageFailure message displayed in case of a failure
     *   @see RMP_IncludedCollection#saveExt
     */
    RMP_IncludedCollection.prototype.save = function( object, messageSuccess, messageFailure ) {
        this.saveExt( object, {
            onSuccess: this.showSuccessMessage( messageSuccess ),
            onFailure : this.showFailureMessage( messageFailure )
        });
    };

    /**
     *   Save an object to the collection
     *   @method
     *   @param {object} object the object to be saved
     *   @param {RMP_IncludedCollection~saveCallbackSuccess} callbackSuccess - callback to be used in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} callbackFailure - a callback function called in case of a failure
     *   @see RMP_IncludedCollection#saveExt
     */
    RMP_IncludedCollection.prototype.saveCallback = function( object, callbackSuccess, callbackFailure ) {
            this.saveExt( object, {
                 onSuccess : callbackSuccess,
                 onFailure : callbackFailure
            });
        };

    /**
     *   Update objects of the collection.
     *  @see {@link https://docs.mongodb.com/v3.0/core/write-operations/| MongoDB Write Operations documentation}
     *   @method
     *   @param {object} pattern the pattern used to find the object to be modified
     *   @param {object} object the value to be used to update the matching object
     *   @param {object} options options to be used for the call
     *   @param {boolean} options.multi - true to update all matching objects, false to update only the first matching object.
     *               If you set multi to true, you have to use '$' operators in object, otherwise the call will silently fails
     *   @param {string} options.mode - execution mode of the collection (TEST or LIVE), defaults to the current execution mode of the application
     *   @param {boolean} options.asynchronous - false to make a synchronous call, true otherwise (default is true)
     *   @param {RMP_IncludedCollection~countCallbackSuccess} options.onSuccess - a callback function called in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} options.onFailure - a callback function called in case of a failure
     */
    RMP_IncludedCollection.prototype.updateExt = function( pattern, object, options ) {
        var body = JSON.stringify(object);
        var parameters = {  'P_query': pattern ? JSON.stringify(pattern) : '{}',
                            'P_multi': this.optValue( options, "multi", false),
                            'P_mode': this.optValue( options, "mode", RMPApplication.getExecutionMode()),
                            'asynchronous': this.optValue( options, "asynchronous", true )
        };
        this.PUT(  parameters, body, options.onSuccess, options.onFailure );
    };

    /**
     *   Update one object of the collection
     *   @method
     *   @param {object} pattern pattern to be matched in the collection
     *   @param {object} object the value to be used to update the matching object
     *   @param {String} messageSuccess message displayed in case of a success
     *   @param {String} messageFailure message displayed in case of a failure
     *   @see RMP_IncludedCollection#updateExt
     */
    RMP_IncludedCollection.prototype.update = function( pattern, object, messageSuccess, messageFailure ) {
        this.updateExt( pattern, object, {
            onSuccess : this.showSuccessMessage( messageSuccess ),
            onFailure : this.showFailureMessage( messageFailure )
        });
    };

    /**
     *   Update multiple objects of the collection
     *   @method
     *   @param {object} pattern pattern to be matched in the collection
     *   @param {object} object operations ('$' operators) to be executed on the matching objects
     *   @param {String} messageSuccess message displayed in case of a success
     *   @param {String} messageFailure message displayed in case of a failure
     *   @see RMP_IncludedCollection#updateExt
     */
    RMP_IncludedCollection.prototype.updateMulti = function( pattern, object, messageSuccess, messageFailure ) {
        this.updateExt( pattern, object, {
            multi : true,
            onSuccess : this.showSuccessMessage( messageSuccess ),
            onFailure : this.showFailureMessage( messageFailure )
        });
    };

    /**
     *   Update multiple objects of the collection
     *   @method
     *   @param {object} pattern pattern to be matched in the collection
     *   @param {object} object operations ('$' operators) to be executed on the matching objects
     *   @param {RMP_IncludedCollection~countCallbackSuccess} callbackSuccess - a callback function called in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} callbackFailure - a callback function called in case of a failure
     *   @see RMP_IncludedCollection#updateExt
     */
    RMP_IncludedCollection.prototype.updateMultiCallback = function( pattern, object, callbackSuccess, callbackFailure ) {
            this.updateExt( pattern, object, {
                multi : true,
                onSuccess : callbackSuccess,
                onFailure : callbackFailure
            });
        };

    /**
     *   Update one object of the collection
     *   @method
     *   @param {object} pattern - pattern to be matched in the collection
     *   @param {object} object - the value to be used to update the matching object
     *   @param {RMP_IncludedCollection~countCallbackSuccess} callbackSuccess - a callback function called in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} callbackFailure - a callback function called in case of a failure
     *   @see RMP_IncludedCollection#updateExt
     */
    RMP_IncludedCollection.prototype.updateCallback = function( pattern, object, callbackSuccess, callbackFailure ) {
        this.updateExt( pattern, object, {
            onSuccess : callbackSuccess,
            onFailure : callbackFailure
        });
    };

    /**
     *   Aggregate a collection.
     *  @see {@link http://docs.mongodb.org/manual/aggregation/| MongoDB Aggregation documentation}
     *   @method
     *   @param {object} pipelines - an array of pipelines.
     *   @param {object} options - option to be used during the call<br/>
     *   @param {string} [options.mode] - execution mode of the collection (TEST or LIVE), defaults to the current execution mode of the application
     *   @param {number} [options.nb] - number of objects to be returned (maximum is 100), used to paginate results
     *   @param {number} [options.first] - index of the first object to be returned, used to paginate results
     *   @param {array} [options.orderby] -  array of fields to be used to order the results, e.g [name, lastname], a $sort pipeline will be appended to given pipelines
     *   @param {array} [options.order] - array of orders to be used to order the results, there must be one order for each orderby, e.g [asc,desc]
     *   @param {boolean} [options.detailed] - true to get a detailed result (includes count limit and skip values)
     *   @param {boolean} [options.asynchronous] - false to make a synchronous call, true otherwise (default is true)
     *   @param {RMP_IncludedCollection~callbackSuccess} options.onSuccess - a callback function called in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} options.onFailure - a callback function called in case of a failure
     */
    RMP_IncludedCollection.prototype.aggregateExt = function( pipelines, options ) {
        var body = JSON.stringify(pipelines);
        var parameters = {
            'P_mode': this.optValue( options, "mode", RMPApplication.getExecutionMode()),
            'P_nb': this.optValue( options, "nb", 100 ),
            'P_first': this.optValue( options, "first", 0 ),
            'P_orderby': this.optValue( options, "orderby", []),
            'P_order': this.optValue( options, "order", []),
            'P_detail': this.optValue( options, "detailed", false),
            'asynchronous': this.optValue( options, "asynchronous", true )
        };
        this.POST_AGGREG(  parameters, body, options.onSuccess, options.onFailure );
    };

    /**
     *   Aggregate a collection.
     *  @see {@link http://docs.mongodb.org/manual/aggregation/| MongoDB Aggregation documentation}
     *   @method
     *   @param {object} pipelines - an array of pipelines.
     *   @param {object} options - options to be used during the call<br/>
     *   @param {string} [options.mode] - execution mode of the collection (TEST or LIVE), defaults to the current execution mode of the application
     *   @param {number} [options.nb] - number of objects to be returned (maximum is 100), used to paginate results
     *   @param {number} [options.first] - index of the first object to be returned, used to paginate results
     *   @param {array} [options.orderby] -  array of fields to be used to order the results, e.g [name, lastname], a $sort pipeline will be appended to given pipelines
     *   @param {array} [options.order] - array of orders to be used to order the results, there must be one order for each orderby, e.g [asc,desc]
     *   @param {boolean} [options.detailed] - true to get a detailed result (includes count limit and skip values)
     *   @param {boolean} [options.asynchronous] - false to make a synchronous call, true otherwise (default is true)
     *   @param {RMP_IncludedCollection~callbackSuccess} callbackSuccess - a callback function called in case of a success
     *   @param {RMP_IncludedCollection~callbackFailure} callbackFailure - a callback function called in case of a failure
     *   @see RMP_IncludedCollection#aggregateExt
     */
    RMP_IncludedCollection.prototype.aggregateCallback = function( pipelines, options, callbackSuccess, callbackFailure ) {
        options.onSuccess = callbackSuccess;
        options.onFailure = callbackFailure;
        this.aggregateExt( pipelines, options );
    };

    /**
     * Collection operation success callback
     * @callback RMP_IncludedCollection~callbackSuccess
     * @param {object} response - If detailed is false response is an array containing the results.
     *                       if detailed is true, response is an object with properties
     * @param {array} response.values - an array containing the objects result of the aggregation
     * @param {number} response.count - the length of values array
     * @param {number} response.limit - the max number of items returned as specified in the pipelines
     * @param {number} response.skip - the rank of the first item returned as specified in the pipelines
     */

    /**
     * Collection operation failure callback
     * @callback RMP_IncludedCollection~callbackFailure
     * @param {object} response - an object with the following properties
     * @param {object} response.responseJSON - an object
     * @param {string} responses.responseJSON.error - the error message transmitted by the server
     */

    /**
     * Collection operation success callback, when a count is expected
     * @callback RMP_IncludedCollection~countCallbackSuccess
     * @param {object} response - an object with properties
     * @param {number} response.P_count - the number of removed/updated objects
     */

    /**
     * Collection operation success callback, when an object is expected
     * @callback RMP_IncludedCollection~loadCallbackSuccess
     * @param {object} response - the object loaded
     */

    /**
     * Collection operation success callback, when a saved object is expected
     * @callback RMP_IncludedCollection~saveCallbackSuccess
     * @param {object} response - the new version of the saved object
     */
}
RMP_IncludedCollection.prototype = new RMP_Component();
RMP_IncludedCollection.prototype.getType = function(){return "RMP_IncludedCollection";};
/**@private*/
RMP_IncludedCollection.prototype.finalizeNotOperator = function(data){};
/**@private*/
RMP_IncludedCollection.prototype.getUrlWithId = function(nameId, index){};
/**@private*/
RMP_IncludedCollection.prototype.getAccessUrlWithId = function(nameId, index){};
/**@private*/
RMP_IncludedCollection.prototype.getNameWithId = function(nameId, index){};
/**@private*/
RMP_IncludedCollection.prototype.getAggregateUrlWithId = function(nameId, index){};
/** @private */
RMP_IncludedCollection.prototype.getContainerIndex = function() {};
/** @private */
RMP_IncludedCollection.prototype.getParent = function() {};
/** @private */
RMP_IncludedCollection.prototype.isIndexed = function() {};


/**
* @class
* @classdesc Tree widget
* @extends RMP_CompositeWidget
* @example
*  <listing>
*    var data = [
*    			{"value":"RunMyProcess","href":"http://www.runmyprocess.com/","editable":"false","type":"text",
*    				"children":[
*    							{"value":"1338315899","type":"date"},
*    							{"value":"109.23333","type":"number"}
*    						]},
*    			{"value":"lazy node","lazy":"true",
*    			"dataUrl":"https://live.runmyprocess.com/live/1/object/tree/?P_query={}&P_mode=TEST&P_nb=100&P_first=0&P_detail=false&asynchronous=true"},
*    
*    			{"value":"1338315800","type":"date"},
*    			{"value":"259.3526","type":"number","icon":"http://localhost/rmp/script/com.runmyprocess.ApplicationRunner/images/add.png"}];
*    
*    id_tree.setData(data);
*    
*    id_tree.setLoadSuccessHandler(function(node,data){
*       // the fetched data is a valid json node list; let's append it directly in node
*    	id_tree.setNodeChildrenDataString(node.id,data);
*    });
*  </listing>
*/
function RMP_Tree( conf ){
	RMP_CompositeWidget.call( this, conf );
	/** @private */
	this.expandHandler = null;
	/** @private */
	this.collapseHandler = null;
	/** @private */
	this.loadSuccessHandler = null;
	/** @private */
	this.loadFailureHandler = null;
	/** @private */
	this.selectionHandler = null;
	
	/**
	 * 
	 * @callback RMP_Tree~nodeHandler
	 * @param {RMP_Tree~RMP_TreeItem} node
	 */
	 /**
	 * 
	 * @callback RMP_Tree~nodesHandler
	 * @param {RMP_Tree~RMP_TreeItem[]} nodes list of nodes of {@link RMP_Tree~RMP_TreeItem}
	 */
	 /**
	 * 
	 * @callback RMP_Tree~loadSuccessHandler
	 * @param {RMP_Tree~RMP_TreeItem} node
	 * @param {Object} data
	 */
	 /**
	 * 
	 * @callback RMP_Tree~loadFailureHandler
	 * @param {RMP_Tree~RMP_TreeItem} node
	 * @param {Object} error
	 */
	/**
	 * Tree item
	 * @typedef {Object} RMP_Tree~RMP_TreeItem
	 * @property {String} [value] - value of the node. Html is not allowed here.
	 * @property {String} [label] - Displayed name of the node.
	 * @property {String} [id] - Id of the node, only needed if you want to use a given node with some JS functions setNodeData, getNodeData, ...
	 * @property {String} [type] - Type of the node value. A node can be a number, a date, a list, a boolean or a text. by default it is text.
	 * @property {String} [link] - A facultative url if you want to add a link on the displayed value.
	 * @property {String} [lazy] - Loading child nodes on demand, false by default. When a node is lazy loaded, you SHOULD configure dataUrl attribute and a loadSuccessHandler to handle the fetched data before appending it back to the node.
	 * @property {String} [dataUrl] - The url that provides the data that well be fetched to build the lazy loaded node. Cross-site requests are not allowed here the fetched data should be hosted in RunMyProcess servers!
	 * @property {String} [icon] - Image url used to customize the node icon. By default a folder icon is used for nodes, and a page icon for leafs.
	 * @property {String} [editable] - The node value is editable or not. True by default.
	 * @property {String} [children] - Array of child nodes of type {@link RMP_Tree~RMP_TreeItem}.
	 */
	
	/**
    *  Fill the tree with a list of nodes
    *  @param {RMP_Tree~RMP_TreeItem[]} object nodes list of {@link RMP_Tree~RMP_TreeItem}
    *  @example
	*  <listing>
	*    var data = [
	*    			{"value":"RunMyProcess","href":"http://www.runmyprocess.com/","editable":"false","type":"text",
	*    				"children":[
	*    							{"value":"1338315899","type":"date"},
	*    							{"value":"109.23333","type":"number"}
	*    						]},
	*    			{"value":"lazy node","lazy":"true",
	*    			"dataUrl":"https://live.runmyprocess.com/live/1/object/tree/?P_query={}&P_mode=TEST&P_nb=100&P_first=0&P_detail=false&asynchronous=true"},
	*    
	*    			{"value":"1338315800","type":"date"},
	*    			{"value":"259.3526","type":"number","icon":"http://localhost/rmp/script/com.runmyprocess.ApplicationRunner/images/add.png"}];
	*    
	*    id_tree.setData(data);
	*  </listing>
    */
	RMP_Tree.prototype.setData = function(object){
    	this.setDataString( JSON.stringify(object) );
    };
    
    /**
     * Returns tree data
     * @returns {RMP_Tree~RMP_TreeItem[]} nodes list of {@link RMP_Tree~RMP_TreeItem}
     */
    RMP_Tree.prototype.getData = function(){
    	var dataString = this.getDataString();
    	return dataString ? JSON.parse(dataString) : [];
    };
    
	/**
     *  Fill the tree with a json string
     *  @param {String} jsonString nodes list as a json string <br/>
     *  @example
 	*  <listing>
 	*    var dataString = "{\"value\":\"1338315800\",\"type\":\"date\"},{\"value\":\"259.3526\",\"type\":\"number\"}]";
 	*    id_tree.setDataString(dataString);
 	*  </listing>
     */
    RMP_Tree.prototype.setDataString = function(jsonString){
    	this.setDataStringWithId(this.conf.id, this.conf.index, jsonString);
    };
    
    /**
     * Returns tree data as a json string
     * @returns {String} nodes list String
     */
    RMP_Tree.prototype.getDataString = function(){
    	return this.getDataStringWithId(this.conf.id, this.conf.index);
    };
    
    /**
     *  Set or update a tree node
     *  @param {String} nodeId the id of the node to update
     *  @param {String} jsonString node data as json string
     *  @example
 	*  <listing>
 	*    var nodeDataString = "{\"value\":\"1338315800\",\"type\":\"date\",\"editable\":\"false\"}";
 	*    id_tree.setNodeDataString("id_node",nodeDataString);
 	*  </listing>
     */
    RMP_Tree.prototype.setNodeDataString = function(nodeId, jsonString){
    	this.setNodeDataStringWithId(this.conf.id, this.conf.index, nodeId, jsonString);
    };
    
    /**
     * Returns node data as a json string
     * @param {String} nodeId the id of the node
     * @returns {String} node data as a json string
     */
    RMP_Tree.prototype.getNodeDataString = function(nodeId){
    	return this.getNodeDataStringWithId(this.conf.id, this.conf.index, nodeId);
    };
    
    /**
     *  Set or update a tree node
     *  @param {String} nodeId the id of the node to update
     *  @param {RMP_Tree~RMP_TreeItem} object node data
     *  @example
 	 *  <listing>
 	 *    var nodeData = {"value":"RunMyProcess","href":"http://www.runmyprocess.com/","editable":"false","type":"text",
	 *    				"children":[
	 *    							{"value":"1338315899","type":"date"},
	 *    							{"value":"109.23333","type":"number"}
	 *    						]};
 	 *    id_tree.setNodeData("id_node",nodeData);
 	 *  </listing>
     */
    RMP_Tree.prototype.setNodeData = function(nodeId, object){
    	this.setNodeDataString(nodeId,JSON.stringify(object));
    };
    
    /**
     * Returns node data
     * @param {String} nodeId the id of the node
     * @returns {RMP_Tree~RMP_TreeItem} node data
     */
    RMP_Tree.prototype.getNodeData = function(nodeId){
    	var dataString = this.getNodeDataString(nodeId);
    	return dataString ? JSON.parse(dataString) : {};
    };
    
    /**
     *  Set or update a tree node's children
     *  @param {String} nodeId the id of the node to update
     *  @param {String} jsonString node children list as json string
     *  @example
 	 *  <listing>
 	 *    var nodeChildrenDataString = "[{\"value\":\"1338315899\",\"type\":\"date\"},{\"value\":\"109.23333\",\"type\":\"number\"}]";
 	 *    id_tree.setNodeChildrenDataString("id_node",nodeChildrenDataString);
 	 *  </listing>
     */
    RMP_Tree.prototype.setNodeChildrenDataString = function(nodeId, jsonString){
    	this.setNodeChildrenDataStringWithId(this.conf.id, this.conf.index, nodeId, jsonString);
    };
    
    /**
     *  Set or update a tree node's children
     *  @param {String} nodeId the id of the node to update
     *  @param {object} object node children list of {@link RMP_Tree~RMP_TreeItem}
     *  @example
 	 *  <listing>
 	 *    var nodeChildrenData = [{"value":"1338315899","type":"date"},{"value":"109.23333","type":"number"}];
 	 *    id_tree.setNodeChildrenData("id_node",nodeChildrenData);
 	 *  </listing>
     */
    RMP_Tree.prototype.setNodeChildrenData = function(nodeId, object){
    	this.setNodeChildrenDataString(nodeId,JSON.stringify(object));
    };
	
	/**
    *  Adds nodes expand handler
    *  @param {RMP_Tree~nodeHandler} handler callback to be used when a node is expanded.
    *  @example
	*  <listing>
	*    idTree.setExpandHandler( function(node){ alert(node.value+" : "+node.type+" : "node.editable); } );
	*  </listing>
    */
	RMP_Tree.prototype.setExpandHandler = function( handler ){
		this.expandHandler = handler;
		this.setExpandHandlerWithId(this.conf.id, this.conf.index, handler!=null);
	};
    
    /**
     * The function used to handle node expanded event
     * @returns {RMP_Tree~nodeHandler} handler
     */
	RMP_Tree.prototype.getExpandHandler = function(){
		return this.expandHandler;
	};
	/** @private */
	RMP_Tree.prototype.onNodeExpanded = function( node ){
		if( this.expandHandler!=null && node ){
			this.expandHandler(JSON.parse(node));
		}
	};
	
	/**
    *  Adds nodes collapse handler
    *  @param {RMP_Tree~nodeHandler} handler callback to be used when a node is collapsed, the callback function should take a node parameter
    *  @example
	*  <listing>
	*    idTree.setCollapseHandler( function(node){ alert(node.id+" collapsed!"); } );
	*  </listing>
    */
	RMP_Tree.prototype.setCollapseHandler = function( handler ){
		this.collapseHandler = handler;
		this.setCollapseHandlerWithId(this.conf.id, this.conf.index, handler!=null);
	};
    
    /**
     * The function used to handle node collapsed event
     * @returns {RMP_Tree~nodeHandler} handler
     */
	RMP_Tree.prototype.getCollapseHandler = function(){
		return this.collapseHandler;
	};
	/** @private */
	RMP_Tree.prototype.onNodeCollapsed = function( node ){
		if( this.collapseHandler!=null && node ){
			this.collapseHandler(JSON.parse(node));
		}
	};
	
	/**
    *  Adds a callback used when data is retrieved successfully from after expanding a lazy node. NOTE: this callback is used for all tree nodes
    *  @param {RMP_Tree~loadSuccessHandler} handler success callback function
    *  @example
	*  <listing>
	*    // example one
	*    idTree.setLoadSuccessHandler(function(node,data){
	*       // the fetched data is a valid json node list; let's append it directly in node
	*    	idTree.setNodeChildrenDataString(node.id,data);
	*    });
	*    
	*    // example two
	*    idTree.setLoadSuccessHandler(function(node,data){
	*    	// data in this case is an xml feed; let's build our node list by calling another function that knows data feed structure
	*       // before appending resulted list node in node
	*    	var childrenArray = buildChildren(data);
	*    	idTree.setNodeChildrenData(node.id,childrenArray);
	*    });
	*  </listing>
    */
	RMP_Tree.prototype.setLoadSuccessHandler = function( handler ){
		this.loadSuccessHandler = handler;
	};
	/**
     * The function used when lazy node data is loaded successfully
     * @returns {RMP_Tree~loadSuccessHandler} handler function
     */
	RMP_Tree.prototype.getLoadSuccessHandler = function(){
		return this.loadSuccessHandler;
	};
	/** @private */
	RMP_Tree.prototype.onLoadSucceeded = function( node, data ){
		if( this.loadSuccessHandler!=null ){
			this.loadSuccessHandler( JSON.parse(node), data );
		}
	};
	
	/**
    *  Adds a callback used when failed to load data after expanding a lazy node. NOTE: this callback is used for all tree nodes
    *  @param {RMP_Tree~loadFailureHandler} handler failure callback function
    *  @example
	*  <listing>
	*    idTree.setLoadFailureHandler(function(node,error){
	*    	alert("failed to load "+node.id+". error detail: "+error);
	*    });
	*  </listing>
    */
	RMP_Tree.prototype.setLoadFailureHandler = function( handler ){
		this.loadFailureHandler = handler;
	};
	/**
     * The function used when failed to load lazy node data
     * @returns {RMP_Tree~loadFailureHandler} handler function
     */
	RMP_Tree.prototype.getLoadFailuresHandler = function(){
		return this.loadFailureHandler;
	};
	/** @private */
	RMP_Tree.prototype.onLoadFailed = function( node, error ){
		if( this.loadFailureHandler!=null ){
			this.loadFailureHandler( JSON.parse(node), error );
		}
	};
	
	/**
    *  Adds nodes selection handler
    *  @param {RMP_Tree~nodesHandler} handler a function used when a node is selected, this function should take an array parameter that contains selected nodes
    *  @example
	*  <listing>
	*    idTree.setSelectionHandler( function( selectedItems ){ alert("selected Items count: "+selectedItems.length); } );
	*  </listing>
    */
	RMP_Tree.prototype.setSelectionHandler = function( handler ){
		this.selectionHandler = handler;
		this.setSelectionHandlerWithId(this.conf.id, this.conf.index, handler!=null);
	};
	
	/**
     * Get the function used when a tree item is selected
     * @returns {RMP_Tree~nodesHandler} handler function
     */
	RMP_Tree.prototype.getSelectionHandler = function(){
		return this.selectionHandler;
	};
	/** @private */
	RMP_Tree.prototype.onNodeSelected = function( selectedNodes ){
		if( this.selectionHandler!=null ){
			var data = selectedNodes ? JSON.parse(selectedNodes) : [];
			this.selectionHandler( data );
		}
	};
	
	/** @private */
	RMP_Tree.prototype.loadData = function( dataUrl, successCallback, failureCallback ){
		RMPApplication.doAjaxRequest( this.appendRandomParameter( dataUrl ), {
			  method:'get',
			  requestHeaders: ['Accept', "*"],
			  onSuccess: successCallback,
			  onFailure: failureCallback
		});
	};
	
    /**
     *  Set a pattern to format nodes of type number
     *  @param {String} pattern
     *  @example
 	 *  <listing>
 	 *    id_tree.setNumberPattern("#,##");
 	 *  </listing>
     */
    RMP_Tree.prototype.setNumberPattern = function(pattern){
    	this.setNumberPatternWithId(this.conf.id, this.conf.index, pattern);
    };
    
    /**
     * Gets the pattern used to format nodes of type number
     * @returns the pattern used to format number nodes
     */
    RMP_Tree.prototype.getNumberPattern = function(){
    	return this.getNumberPatternWithId(this.conf.id, this.conf.index);
    };
    
    /**
     *  Set a pattern to format nodes of type date
     *  @param {String} pattern
     *  @example
 	 *  <listing>
 	 *    id_tree.setDatePattern("MM-dd-yyyy");
 	 *  </listing>
     */
    RMP_Tree.prototype.setDatePattern = function(pattern){
    	this.setDatePatternWithId(this.conf.id, this.conf.index, pattern);
    };
    
    /**
     * Gets the pattern used to format nodes of type date
     * @returns the pattern used to format date nodes
     */
    RMP_Tree.prototype.getDatePattern = function(){
    	return this.getDatePatternWithId(this.conf.id, this.conf.index);
    };
    
    /**
     * Gets a list of selected nodes {@link RMP_Tree~RMP_TreeItem}
     * @returns object
     */
    RMP_Tree.prototype.getSelectedData = function(){
    	var data = this.getSelectedDataWithId(this.conf.id, this.conf.index);
    	return data!=null ? JSON.parse(data) : [];
    };
    
    /**
     * Clears all tree items from the current tree.
     */
    RMP_Tree.prototype.clear = function(){
    	this.clearWithId(this.conf.id, this.conf.index);
    };
    
    /**
    * Sets the attribute used to parse child nodes
    * @param {String} attribute
    *  @example
	*  <listing>
	*    var data = [{"value":"Node 1", "custom_children_attribute":[{"value":"1338315899","type":"date"}}]},
	*    			{"value":"1338315800","type":"date"}];
	*    
	*    id_tree.setChildrenAttribute("custom_children_attribute");
	*    
	*    id_tree.setData(data);
	*  </listing>
    */
    RMP_Tree.prototype.setChildrenAttribute = function(attribute){
    	this.setChildrenAttributeWithId(this.conf.id, this.conf.index, attribute);
    };
    
    /**
     * Gets the attribute used to parse child nodes
     * @returns {String} the attribute used to parse child nodes
     */
    RMP_Tree.prototype.getChildrenAttribute = function(){
    	return this.getChildrenAttributeWithId(this.conf.id, this.conf.index);
    };
    
    /**
    * Sets the attribute used for the displayed values
    * @param {String} attribute
    *  @example
 	*  <listing>
 	*    var data = [{"custom_value_attr":"Node 1"},{"custom_value_attr":"1338315800","type":"date"}];
 	*    
 	*    id_tree.setValueAttribute("custom_value_attr");
 	*    
 	*    id_tree.setData(data);
 	*  </listing>
    */
    RMP_Tree.prototype.setValueAttribute = function(attribute){
    	this.setValueAttributeWithId(this.conf.id, this.conf.index, attribute);
    };
    
    /**
     * Gets the attribute used for the displayed values
     * @returns {String} the attribute used for the displayed value
     */
    RMP_Tree.prototype.getValueAttribute = function(){
    	return this.getValueAttributeWithId(this.conf.id, this.conf.index);
    };
    
    /**
     * Unselect all selected values
     */
    RMP_Tree.prototype.unselect = function(){
    	this.unselectWithId(this.conf.id, this.conf.index);
    };
}
RMP_Tree.prototype = new RMP_CompositeWidget();
RMP_Tree.prototype.getType = function(){return "RMP_Tree";};
/** @private */
RMP_Tree.prototype.setDataStringWithId = function( nameId, index, jsonString ){};
/** @private */
RMP_Tree.prototype.getDataStringWithId = function( nameId, index ){};
/** @private */
RMP_Tree.prototype.setNodeDataStringWithId = function( nameId, index, nodeId, jsonString ){};
/** @private */
RMP_Tree.prototype.getNodeDataStringWithId = function( nameId, index, nodeId ){};
/** @private */
RMP_Tree.prototype.setNodeChildrenDataStringWithId = function( nameId, index, nodeId, jsonString ){};
/** @private */
RMP_Tree.prototype.setExpandHandlerWithId = function( nameId, index, hasHandler ){};
/** @private */
RMP_Tree.prototype.setCollapseHandlerWithId = function( nameId, index, hasHandler ){};
/** @private */
RMP_Tree.prototype.setSelectionHandlerWithId = function( nameId, index, hasHandler ){};
/** @private */
RMP_Tree.prototype.setNumberPatternWithId = function( nameId, index, pattern ){};
/** @private */
RMP_Tree.prototype.getNumberPatternWithId = function( nameId, index ){};
/** @private */
RMP_Tree.prototype.setDatePatternWithId = function( nameId, index, pattern ){};
/** @private */
RMP_Tree.prototype.getDatePatternWithId = function( nameId, index ){};
/** @private */
RMP_Tree.prototype.getSelectedDataWithId = function( nameId, index ){};
/** @private */
RMP_Tree.prototype.clearWithId = function( nameId, index ){};
/** @private */
RMP_Tree.prototype.setChildrenAttributeWithId = function( nameId, index, attribute ){};
/** @private */
RMP_Tree.prototype.getChildrenAttributeWithId = function( nameId, index ){};
/** @private */
RMP_Tree.prototype.setValueAttributeWithId = function( nameId, index, attribute ){};
/** @private */
RMP_Tree.prototype.getValueAttributeWithId = function( nameId, index ){};
/** @private */
RMP_Tree.prototype.unselectWithId = function( nameId, index ){};


/**
  @class
  @classdesc Geolocation widget
  @extends RMP_ComponentWithVariables
 */
function RMP_GeoLocation( conf ){
	RMP_ComponentWithVariables.call( this, conf );
	
	/**
	*   Locate device position
	*   This will update the associated variable, asynchronously
	**/

	RMP_GeoLocation.prototype.takePosition = function() {
	    this.takePositionWithId( this.conf.id, this.conf.index );
	};

	/**
	* activate continuous position watching, associated variable will be updated
	**/
	RMP_GeoLocation.prototype.watchPosition = function() {
	    this.watchPositionWithId( this.conf.id, this.conf.index );
	};

	/**
	* deactivate continuous position watching
	**/
	RMP_GeoLocation.prototype.clearWatch = function() {
	    this.clearWatchWithId( this.conf.id, this.conf.index );
	};

	/**
	* set button label
	* @param {String} label the new label to be displayed
	**/
	RMP_GeoLocation.prototype.setLabel = function( label ) {
	    this.setLabelWithId( this.conf.id, this.conf.index, label );
	};

	/**
	* get button label
	* @returns the button label
	**/
	RMP_GeoLocation.prototype.getLabel = function() {
	    return this.getLabelWithId( this.conf.id, this.conf.index );
	};
}
RMP_GeoLocation.prototype = new RMP_ComponentWithVariables();
RMP_GeoLocation.prototype.getType = function(){return "RMP_GeoLocation";};
/** @private **/
RMP_GeoLocation.prototype.takePositionWithId = function( nameId, index ) {};
/** @private **/
RMP_GeoLocation.prototype.watchPositionWithId = function( nameId, index ) {};
/** @private **/
RMP_GeoLocation.prototype.clearWatchWithId = function( nameId, index ) {};
/** @private **/
RMP_GeoLocation.prototype.setLabelWithId = function( nameId, index, label ) {};
/** @private **/
RMP_GeoLocation.prototype.getLabelWithId = function( nameId, index ) {};

/**
* @class
* @classdesc Progress bar widget
* @extends RMP_ComponentWithVariables
*/
function RMP_ProgressBar( conf ){
	RMP_ComponentWithVariables.call( this, conf );

	/**
	 * Progress Bar step
	 * @typedef {Object} RMP_ProgressBar~RMP_ProgressBarStep
	 * @property {integer} reference - The ordered number of the step
	 * @property {String} title - Title of the step
	 * @property {String} [subtitle] - Subtitle of the step
	 * @property {String} [number] - Indicator inside the circle of the step (you can ignore it or use auto value to have an automatic, incremental number)
	 * @property {String} [state="next"] - The state of the step, it can take the values: active, previous, hidden, next
	 * @property {String} [screen] - The list of the reference of the manual task
	 */

    /**
    * Initialization of the Progress Bar
    * @private
    */
	RMP_ProgressBar.prototype.init = function(config, states){
        function nDiv(text, className){
            var div = document.createElement('div');
            div.className = className;
            if (text) div.appendChild(document.createTextNode(text));
            return div;
        }
        function nStep(title, subtitle, number, state, last, index, reference, eltId){
            var li = document.createElement('li');
            var className = 'rmppgbstep rmppgbstep'+(1+index);
            li.id = "rmppgb"+eltId+reference;
            if (state == 'previous') className += ' rmppgbstepprevious';
            if (state == 'active') className += ' rmppgbstepcurrent';
            if (state == 'hidden') className += ' rmppgbstephidden';
            li.className = className;
            li.appendChild(nDiv(title, 'rmppgbstepname'));
            li.appendChild(nDiv(number, last?'rmppgbsteplastnum':'rmppgbstepnum'));
            li.appendChild(nDiv(subtitle, 'rmppgbstepsubname'));
            return li;
        }
        function isBetter(state1, state2){
            if (!state1) return true;
            if (!state2) return false;
            switch (state1){
                case 'active': return false;
                case 'hidden': return state2 == 'active';
                case 'previous': return true;
                case 'next': return true;
            }
        }
        function getState(step, states, screen){
        	var state = step.state?step.state:'next';
        	if (screen){
				for (var i = 0; i < screen.length; i++){
					var screenstate = states[screen[i]];
					if (isBetter(state, screenstate)) state = screenstate;
				}
			}else if (states[step.reference]){
			    state = states[step.reference];
            }
			return state;
        }
        function build(pgb, config, states, eltId){
            var autoNum = 1;
            var nbVisible = 0;
            for (var index = 0; index < config.length; index++){
            	var step = config[index];
				var screen = step.screen;
				var state = getState(step, states, screen);
				if (state != 'hidden') nbVisible++;
            }
            for (var index = 0; index < config.length; index++){
                var step = config[index];
                var screen = step.screen;
                var state = getState(step, states, screen);
                RMPApplication.debug("ProgressBar: step: ref="+step.reference+" state="+state);
                var num = step.number && step.number != 'auto'?step.number:autoNum;
                if (state != 'hidden') autoNum++;
                states[step.reference] = state;
                pgb.appendChild(nStep(step.title, step.subtitle, num, state, autoNum > nbVisible, index, step.reference, eltId));
            }
        }
        RMPApplication.debug("ProgressBar: config: "+JSON.stringify(config)+" states: "+JSON.stringify(states));
        if (config && config.length && states){
            var pgb = document.getElementById('rmpprogressbar-'+this.getElementId());
            if (pgb){
                pgb.innerHTML = '';
                this.states = states;
                this.config = config;
                RMPApplication.debug("ProgressBar: build - "+JSON.stringify(states));
                build(pgb, config, states, this.getElementId());
            }else throw 'Cannot find ProgressBar element in dom ('+this.getElementId()+')';
        }else throw 'You have to use RMP_ProgressBar with one JSONArray and one JSONObject parameters';
	};
	/**
	 * @private
	 */
	RMP_ProgressBar.prototype.getElement = function(reference, suffix){
        var step = document.getElementById('rmppgb'+this.getElementId()+reference);
	    if (step){
	        var divs = step.getElementsByTagName('div');
	        for (var index=0; index<divs.length; index++){
	            if (divs[index].className == 'rmppgbstep'+suffix ||
	            divs[index].className == 'rmppgbsteplast'+suffix) return divs[index];
	        }
	        throw 'Step '+reference+' with suffix '+suffix+' not found';
	    }else{
	        throw 'Step '+reference+' not found';
	    }
	};
	/**
	 * Change the title of the step
	 * @param {string} reference reference of the step
	 * @param {string} title new title of the step
	 */
	RMP_ProgressBar.prototype.setTitle=function(reference, title){
	    this.getElement(reference, 'name').innerHTML = title;
	},
	/**
	 * Change the subtitle of the step
	 * @param {string} reference reference of the step
	 * @param {string} subtitle new subtitle of the step
	 */
	RMP_ProgressBar.prototype.setSubTitle=function(reference, subtitle){
		this.getElement(reference, 'subname').innerHTML = subtitle;
	};
	/**
	 * Change the state of the step
	 * @param {string} reference reference of the step
	 * @param {string} state new state of the step (can be 'previous', 'active', 'hidden' or 'next')
	 */
	RMP_ProgressBar.prototype.setState=function(reference, state){
	    var step = document.getElementById('rmppgb'+this.getElementId()+reference);
	    this.states[reference] = state;
	    if (step){
	        var matches = step.className.match(/rmppgbstep([0-9]+)/);
	        if (matches && matches.length > 1){
	            var index = matches[1];
	            var className = 'rmppgbstep rmppgbstep'+index;
	            if (state == 'previous') className += ' rmppgbstepprevious';
	            if (state == 'active') className += ' rmppgbstepcurrent';
	            if (state == 'hidden') className += ' rmppgbstephidden';
	            step.className = className;
	            // update the progress bar variable value
	            var stateVariable = RMPApplication.getDefaultVariableName(this.conf.id);
	            if( stateVariable!="" && stateVariable!=null ){
	            	try{
	            		var statesValue = RMPApplication.getVariable(stateVariable);
	                	statesValue = JSON.parse(statesValue);
	                	statesValue[reference]=state;
	                	RMPApplication.setVariable(stateVariable,JSON.stringify(statesValue));
	            	}catch(er){
	            		console.log("Failed to update the progress bar states variable: "+er);
	            	}
	            }
	        }else{
	            throw 'Cannot find index of step '+reference;
	        }
	        function setNumClassName(elt, last){
	        	if (elt){
					var divs = elt.getElementsByTagName('div');
					for (var index = 0; index < divs.length; index++){
						if (divs[index].className == 'rmppgbsteplastnum' || divs[index].className == 'rmppgbstepnum'){
							if (last) divs[index].className = 'rmppgbsteplastnum';
							else divs[index].className = 'rmppgbstepnum';
						}
					}
	        	}
	        }
	        var last = true;
	        if (this.states[reference+1]) {
	        	var index = 1;
	        	while(this.states[reference+index] && this.states[reference+index] == 'hidden') index++;
				if (this.states[reference+index] && this.states[reference+index] != 'hidden') last = false;
	        }
	        if (last){
				var previous = reference - 1;
				while (previous > 0 && this.states[previous] == 'hidden') previous--;
       			if (this.states[previous] != 'hidden'){
					setNumClassName(step, true);
					setNumClassName(document.getElementById('rmppgb'+this.getElementId()+previous), state == 'hidden');
				}
	        }
	        if (this.config && this.config.length){
	        	var autoNum = 1;
	        	for (var index = 0; index < this.config.length; index++){
					var step = this.config[index];
					var num = step.number && step.number != 'auto'?step.number:autoNum;
					if (this.states[step.reference] != 'hidden') autoNum++;
					if (step.reference >= reference) this.setNumber(step.reference, num);
	        	}
	        }
	    }else{
	        throw 'Step '+reference+' not found';
	    }
	};
	/**
	 * Change the number of the step
	 * @param {string} reference reference of the step
	 * @param {string} state new number of the step (can be 'auto' to have an automatic incremental number)
	 */
	RMP_ProgressBar.prototype.setNumber=function(reference, number){
		this.getElement(reference, 'num').innerHTML = number;
	};

	/**
	 *  Change the configuration of the Progress Bar. The new configuration will be reflected dynamically in the web interface 
	 *  @param {RMP_ProgressBar~RMP_ProgressBarStep[]} object steps configuration as an array of {@link RMP_ProgressBar~RMP_ProgressBarStep}
	 *  @example
	 *  <listing>
	 *    id_bar.setConfig([{"reference":1,"title":"Task1","screen":[1]},{"reference":2,"title":"Task2","state":"active","number":"2","screen":[2,4]},{"reference":3,"title":"Task3"}]);
	 *  </listing>
	 */
	RMP_ProgressBar.prototype.setConfig=function(config){
		this.init(config,{});
	};
}
RMP_ProgressBar.prototype = new RMP_ComponentWithVariables();
RMP_ProgressBar.prototype.getType = function(){return "RMP_ProgressBar";};