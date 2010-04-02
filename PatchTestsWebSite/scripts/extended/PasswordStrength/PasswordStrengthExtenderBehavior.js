// (c) 2010 CodePlex Foundation
(function(){var b="ExtendedPasswordStrength";function a(){var h="none",g="hidden",f="absolute",a="px",l="BelowRight",e=true,k="CalculationWeightings",j="PreferredPasswordLength",i="50;15;15;20",c="",d=false,b=null;Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.PasswordStrengthExtenderBehavior=function(e){var a=this;Sys.Extended.UI.PasswordStrengthExtenderBehavior.initializeBase(a,[e]);a._levelArray=[];a._styleArray=[];a._txtPwdStrengthCssClass=b;a._barBorderCssClass=b;a._barIndicatorCssClass=b;a._displayPosition=Sys.Extended.UI.DisplayPosition.RightSide;a._strengthIndicator=Sys.Extended.UI.StrengthIndicatorTypes.Text;a._preferredPasswordLength=0;a._minimumNumericCharacters=0;a._minimumSymbolCharacters=0;a._requiresUpperAndLowerCaseCharacters=d;a._helpHandleCssClass=c;a._helpHandlePosition=Sys.Extended.UI.DisplayPosition.AboveRight;a._helpText=c;a._helpStatusLabelID=b;a._displayDiv=b;a._helpDiv=b;a._barOuterDiv=b;a._barInnerDiv=b;a._keyPressHandler=b;a._blurHandler=b;a._helpClickHandler=b;a._prefixText=Sys.Extended.UI.Resources.PasswordStrength_StrengthPrompt;a._txtStrengthDescriptions=Sys.Extended.UI.Resources.PasswordStrength_DefaultStrengthDescriptions;a._strengthStyles=c;a._barIndicatorStyles=c;a._txtseparator=";";a._MIN_TXT_LEVEL_COUNT=2;a._MAX_TXT_LEVEL_COUNT=10;a._calcWeightings=i;a._minLowerCaseChars=0;a._minUpperCaseChars=0};Sys.Extended.UI.PasswordStrengthExtenderBehavior.prototype={initialize:function(){var a=this;Sys.Extended.UI.PasswordStrengthExtenderBehavior.callBaseMethod(a,"initialize");a._createIndicatorDisplayElement();var d=a.get_element();a._keyPressHandler=Function.createDelegate(a,a._onKeyPress);a._blurHandler=Function.createDelegate(a,a._onBlur);$addHandler(d,"keyup",a._keyPressHandler);$addHandler(d,"blur",a._blurHandler);if(a._preferredPasswordLength==b||a._preferredPasswordLength==c||a._preferredPasswordLength<=0){a._preferredPasswordLength=10;a.raisePropertyChanged(j)}if(a._calcWeightings==b||a._calcWeightings==c){a._calcWeightings=i;a.raisePropertyChanged(k)}a._getPasswordStrength()},_createIndicatorDisplayElement:function(){var c=this;if(c._strengthIndicator==Sys.Extended.UI.StrengthIndicatorTypes.BarIndicator)c._createBarIndicatorDisplayElement();else c._createTextDisplayElement();if(c._createHelpDisplayElement()==e){$common.setVisible(c._helpDiv,e);var b=$common.getBounds(c.get_element()),f=$common.getBounds(c._helpDiv),h,g,d=3;if(c._helpHandlePosition=="LeftSide"){h=b.y+(b.height/2-f.height/2);g=b.x-f.width}else if(c._helpHandlePosition==l){h=b.y+b.height-d;g=b.x+b.width-d}else if(c._helpHandlePosition=="BelowLeft"){h=b.y+b.height-d;g=b.x-f.width+d}else if(c._helpHandlePosition=="RightSide"){h=b.y+(b.height/2-f.height/2);g=b.x+b.width}else if(c._helpHandlePosition=="AboveLeft"){h=b.y-f.height+d;g=b.x-f.width+d}else{h=b.y-f.height+d;g=b.x+b.width-d}c._helpDiv.style.top=h+a;c._helpDiv.style.left=g+a}},_createTextDisplayElement:function(){var b=this,a=document.createElement("label");a.style.position=f;a.style.visibility=g;a.style.display=h;if(b.get_element().id)a.id=b.get_element().id+"_PasswordStrength";b._displayDiv=a;b._setTextDisplayLocation(a);document.body.appendChild(a);b._setTextDisplayStyle(0)},_setTextDisplayStyle:function(b){var a=this;if(a._styleArray.length==0)if(a._txtPwdStrengthCssClass)a._displayDiv.className=a._txtPwdStrengthCssClass;else a._displayDiv.style.backgroundColor="yellow";else{a._displayDiv.style.backgroundColor=c;a._txtPwdStrengthCssClass&&Sys.UI.DomElement.containsCssClass(a._displayDiv,a._txtPwdStrengthCssClass)&&Sys.UI.DomElement.removeCssClass(a._displayDiv,a._txtPwdStrengthCssClass);a._displayDiv.className=a._styleArray[b]}},_setBarDisplayStyle:function(b){var a=this;if(a._barBorderCssClass!=c)a._barOuterDiv.className=a._barBorderCssClass;else{d1.style.width="200px";d1.style.borderStyle="solid";d1.style.borderWidth="1px"}if(a._styleArray.length==0)if(a._barIndicatorCssClass!=c)a._barInnerDiv.className=a._barIndicatorCssClass;else a._barInnerDiv.style.backgroundColor="red";else{a._barIndicatorCssClass&&Sys.UI.DomElement.containsCssClass(a._barInnerDiv,a._barIndicatorCssClass)&&Sys.UI.DomElement.removeCssClass(a._barInnerDiv,a._barIndicatorCssClass);a._barInnerDiv.className=a._styleArray[b]}},_createBarIndicatorDisplayElement:function(){var b=this,c=document.createElement("div");c.style.position=f;c.style.visibility=g;c.style.display=h;var d=document.createElement("div");d.style.position=f;d.style.visibility=g;d.style.display=h;c.style.height=b.get_element().offsetHeight+4+a;if(b.get_element().id){c.id=b.get_element().id+"_PasswordStrengthBar1";d.id=b.get_element().id+"_PasswordStrengthBar2"}b._barOuterDiv=c;b._barInnerDiv=d;b._extractStyles();b._setBarDisplayStyle(0);document.body.appendChild(c);document.body.appendChild(d);b._setBarDisplayLocation(c,d)},_createHelpDisplayElement:function(){var a=this;if(a._helpHandleCssClass!=c){var i=document.createElement("a");i.style.position=f;i.style.visibility=g;i.style.display=h;i.href="#";i.title=Sys.Extended.UI.Resources.PasswordStrength_GetHelpRequirements;if(a.get_element().id)i.id=a.get_element().id+"_PasswordStrengthReqDisplay";a._helpClickHandler=Function.createDelegate(a,a._onHelpClick);$addHandler(i,"click",a._helpClickHandler);a._helpDiv=i;a._helpDiv.className=a._helpHandleCssClass;if(a.get_element().parentElement!=b&&a.get_element().parentElement.canHaveChildren)a.get_element().parentElement.appendChild(i);else document.body.appendChild(i);return e}else return d},_setTextDisplayLocation:function(c){var b=this,d=$common.getLocation(b.get_element()),f=$common.getBounds(b.get_element()),e=15;if(b._displayPosition==Sys.Extended.UI.DisplayPosition.LeftSide){c.style.top=d.y+a;c.style.left=d.x-f.width-e+a}else if(b._displayPosition==l){c.style.top=d.y+b.get_element().offsetHeight+a;c.style.left=d.x+b.get_element().offsetWidth-b.get_element().offsetWidth/4+a}else if(b._displayPosition==Sys.Extended.UI.DisplayPosition.BelowLeft){c.style.top=d.y+b.get_element().offsetHeight+a;c.style.left=d.x-e+a}else if(b._displayPosition==Sys.Extended.UI.DisplayPosition.AboveRight){c.style.top=d.y-b.get_element().offsetHeight+a;c.style.left=d.x+b.get_element().offsetWidth-b.get_element().offsetWidth/4+a}else if(b._displayPosition==Sys.Extended.UI.DisplayPosition.AboveLeft){c.style.top=d.y-b.get_element().offsetHeight+a;c.style.left=d.x-e+a}else{c.style.top=d.y+a;c.style.left=d.x+b.get_element().offsetWidth+e+a}},_setBarDisplayLocation:function(d,f){var b=this;if(b.get_element().offsetHeight>0){var l=$common.getBorderBox(d),k=$common.getPaddingBox(d),g=l.left+k.left,h=l.top+k.top;f.style.height=b.get_element().offsetHeight+a;d.style.height=b.get_element().offsetHeight+a;var c=$common.getLocation(b.get_element()),i=15;if(b._displayPosition==Sys.Extended.UI.DisplayPosition.LeftSide){var m=$common.getVisible(b._barOuterDiv);$common.setVisible(b._barOuterDiv,e);var n=$common.getContentSize(d);$common.setVisible(b._barOuterDiv,m);var j=n.width;d.style.top=c.y+a;d.style.left=c.x-parseInt(j)-i+a;f.style.top=c.y+h+a;f.style.left=c.x-parseInt(j)-i+g+a}else if(b._displayPosition==Sys.Extended.UI.DisplayPosition.BelowRight){d.style.top=c.y+b.get_element().offsetHeight+a;d.style.left=c.x+b.get_element().offsetWidth+a;f.style.top=c.y+b.get_element().offsetHeight+h+a;f.style.left=c.x+b.get_element().offsetWidth+g+a}else if(b._displayPosition==Sys.Extended.UI.DisplayPosition.BelowLeft){d.style.top=c.y+b.get_element().offsetHeight+a;d.style.left=c.x+a;f.style.top=c.y+b.get_element().offsetHeight+h+a;f.style.left=c.x+g+a}else if(b._displayPosition==Sys.Extended.UI.DisplayPosition.AboveRight){d.style.top=c.y-b.get_element().offsetHeight+a;d.style.left=c.x+b.get_element().offsetWidth+a;f.style.top=c.y-b.get_element().offsetHeight+h+a;f.style.left=c.x+b.get_element().offsetWidth+g+a}else if(b._displayPosition==Sys.Extended.UI.DisplayPosition.AboveLeft){d.style.top=c.y-b.get_element().offsetHeight+a;d.style.left=c.x+a;f.style.top=c.y-b.get_element().offsetHeight+h+a;f.style.left=c.x+g+a}else{d.style.top=c.y+a;d.style.left=c.x+b.get_element().offsetWidth+i+a;f.style.top=c.y+h+a;f.style.left=c.x+b.get_element().offsetWidth+i+g+a}}},_showStrength:function(){var a=this,g=a.get_element();if(g.readOnly==e)return;var d=a._getPasswordStrength();if(a._strengthIndicator==Sys.Extended.UI.StrengthIndicatorTypes.BarIndicator){$common.setVisible(a._barOuterDiv,e);$common.setVisible(a._barInnerDiv,e);var c=0;if(a._styleArray!=b&&a._styleArray.length>0)c=parseInt(d/100*(a._styleArray.length-1));a._setBarDisplayStyle(c);a._setBarDisplayLocation(a._barOuterDiv,a._barInnerDiv);a._showStrengthAsBarValue(d)}else{a._createTextDescriptions(a._txtStrengthDescriptions);$common.setVisible(a._displayDiv,e);var c=parseInt(d/100*(a._levelArray.length-1)),f=a._levelArray[c];a._setTextDisplayStyle(c);a._setTextDisplayLocation(a._displayDiv);a._showStrengthAsText(f)}},_showStrengthAsText:function(a){this._displayDiv.innerHTML=this._prefixText+a},_showStrengthAsBarValue:function(b){var d=$common.getContentSize(this._barOuterDiv),e=$common.getPaddingBox(this._barOuterDiv),c=parseInt(d.width*(b/100));this._barInnerDiv.style.width=c+a},_getPasswordStrength:function(){var f=", ",a=this,j=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(a.get_element()).get_Value(),d=c,g=0,k=a._calcWeightings.split(";");k.length!=4&&Sys.Debug.assert(b,Sys.Extended.UI.Resources.PasswordStrength_InvalidWeightingRatios);var v=parseInt(k[0]),o=parseInt(k[1]),n=parseInt(k[2]),p=parseInt(k[3]),h=j.length/a._preferredPasswordLength;if(h>1)h=1;var q=h*v;g+=q;if(h<1)d=String.format(Sys.Extended.UI.Resources.PasswordStrength_RemainingCharacters,a._preferredPasswordLength-j.length);if(a._minimumNumericCharacters>0){var t=new RegExp("[0-9]","g"),i=a._getRegexCount(t,j);if(i>=a._minimumNumericCharacters)g+=o;if(i<a._minimumNumericCharacters){if(d!=c)d+=f;d+=String.format(Sys.Extended.UI.Resources.PasswordStrength_RemainingNumbers,a._minimumNumericCharacters-i)}}else g+=h*o;if(a._requiresUpperAndLowerCaseCharacters==e||typeof a._requiresUpperAndLowerCaseCharacters=="String"&&Boolean.parse(a._requiresUpperAndLowerCaseCharacters)==e){var r=new RegExp("[a-z]","g"),s=new RegExp("[A-Z]","g"),l=a._getRegexCount(r,j),m=a._getRegexCount(s,j);if(l>0||m>0)if(l>=a._minLowerCaseChars&&m>=a._minUpperCaseChars)g+=n;else{if(a._minLowerCaseChars>0&&a._minLowerCaseChars-l>0){if(d!=c)d+=f;d+=String.format(Sys.Extended.UI.Resources.PasswordStrength_RemainingLowerCase,a._minLowerCaseChars-l)}if(a._minUpperCaseChars>0&&a._minUpperCaseChars-m>0){if(d!=c)d+=f;d+=String.format(Sys.Extended.UI.Resources.PasswordStrength_RemainingUpperCase,a._minUpperCaseChars-m)}}else{if(d!=c)d+=f;d+=Sys.Extended.UI.Resources.PasswordStrength_RemainingMixedCase}}else g+=h*n;if(a._minimumSymbolCharacters>0){var u=new RegExp("[^a-z,A-Z,0-9, ]","g"),i=a._getRegexCount(u,j);if(i>=a._minimumSymbolCharacters)g+=p;if(i<a._minimumSymbolCharacters){if(d!=c)d+=f;d+=String.format(Sys.Extended.UI.Resources.PasswordStrength_RemainingSymbols,a._minimumSymbolCharacters-i)}}else g+=h*p;a.set_HelpText(d);return g},_getRegexCount:function(f,a){var e=0;if(a!=b&&a!=c){var d=a.match(f);if(d!=b)e=d.length}return e},_extractStyles:function(){var a=this;if(a._strengthStyles!=b&&a._strengthStyles!=c)a._styleArray=a._strengthStyles.split(a._txtseparator)},_createTextDescriptions:function(){var a=this;a._levelArray=a._txtStrengthDescriptions.split(a._txtseparator);a._extractStyles();a._styleArray.length>0&&a._styleArray.length!=a._levelArray.length&&Sys.Debug.assert(d,Sys.Extended.UI.Resources.PasswordStrength_InvalidStrengthDescriptionStyles);(a._levelArray.length<a._MIN_TXT_LEVEL_COUNT||a._levelArray>a._MAX_TXT_LEVEL_COUNT)&&Sys.Debug.assert(d,Sys.Extended.UI.Resources.PasswordStrength_InvalidStrengthDescriptions)},_onKeyPress:function(){this._showStrength()},_onBlur:function(){var a=this;if(a._strengthIndicator==Sys.Extended.UI.StrengthIndicatorTypes.BarIndicator){$common.setVisible(a._barOuterDiv,d);$common.setVisible(a._barInnerDiv,d)}else $common.setVisible(a._displayDiv,d)},_onHelpClick:function(){if(this._helpText==c)alert(Sys.Extended.UI.Resources.PasswordStrength_Satisfied);else alert(this._helpText)},dispose:function(){var a=this,e=a.get_element();if(a._keyPressHandler){$removeHandler(e,"keyup",a._keyPressHandler);a._keyPressHandler=b}if(a._blurHandler){$removeHandler(e,"blur",a._blurHandler);a._blurHandler=b}if(a._helpClickHandler){$removeHandler(a._helpDiv,"click",a._helpClickHandler);a._helpClickHandler=b}a._displayDiv&&$common.setVisible(a._displayDiv,d);a._barOuterDiv&&$common.setVisible(a._barOuterDiv,d);a._barInnerDiv&&$common.setVisible(a._barInnerDiv,d);a._helpHandleCssClass!=c&&a._helpDiv&&$common.setVisible(a._helpDiv,d);Sys.Extended.UI.PasswordStrengthExtenderBehavior.callBaseMethod(a,"dispose")},get_PreferredPasswordLength:function(){return this._preferredPasswordLength},set_PreferredPasswordLength:function(a){if(this._preferredPasswordLength!=a){this._preferredPasswordLength=a;this.raisePropertyChanged(j)}},get_MinimumNumericCharacters:function(){return this._minimumNumericCharacters},set_MinimumNumericCharacters:function(a){if(this._minimumNumericCharacters!=a){this._minimumNumericCharacters=a;this.raisePropertyChanged("MinimumNumericCharacters")}},get_MinimumSymbolCharacters:function(){return this._minimumSymbolCharacters},set_MinimumSymbolCharacters:function(a){if(this._minimumSymbolCharacters!=a){this._minimumSymbolCharacters=a;this.raisePropertyChanged("MinimumSymbolCharacters")}},get_RequiresUpperAndLowerCaseCharacters:function(){return this._requiresUpperAndLowerCaseCharacters},set_RequiresUpperAndLowerCaseCharacters:function(a){if(this._requiresUpperAndLowerCaseCharacters!=a){this._requiresUpperAndLowerCaseCharacters=a;this.raisePropertyChanged("RequiresUpperAndLowerCaseCharacters")}},get_TextCssClass:function(){return this._txtPwdStrengthCssClass},set_TextCssClass:function(a){if(this._txtPwdStrengthCssClass!=a){this._txtPwdStrengthCssClass=a;this.raisePropertyChanged("TextCssClass")}},get_BarBorderCssClass:function(){return this._barBorderCssClass},set_BarBorderCssClass:function(a){if(this._barBorderCssClass!=a){this._barBorderCssClass=a;this.raisePropertyChanged("BarBorderCssClass")}},get_BarIndicatorCssClass:function(){return this._barIndicatorCssClass},set_BarIndicatorCssClass:function(a){if(this._barIndicatorCssClass!=a){this._barIndicatorCssClass=a;this.raisePropertyChanged("BarIndicatorCssClass")}},get_DisplayPosition:function(){return this._displayPosition},set_DisplayPosition:function(a){if(this._displayPosition!=a){this._displayPosition=a;this.raisePropertyChanged("DisplayPosition")}},get_PrefixText:function(){return this._prefixText},set_PrefixText:function(a){if(this._prefixText!=a){this._prefixText=a;this.raisePropertyChanged("PrefixText")}},get_StrengthIndicatorType:function(){return this._strengthIndicator},set_StrengthIndicatorType:function(a){if(this._strengthIndicator!=a){this._strengthIndicator=a;this.raisePropertyChanged("StrengthIndicatorType")}},get_TextStrengthDescriptions:function(){return this._txtStrengthDescriptions},set_TextStrengthDescriptions:function(a){if(a!=b&&a!=c&&a!=this._txtStrengthDescriptions){this._txtStrengthDescriptions=a;this.raisePropertyChanged("TextStrengthDescriptions")}},get_StrengthStyles:function(){return this._strengthStyles},set_StrengthStyles:function(a){if(a!=b&&a!=c&&a!=this._strengthStyles){this._strengthStyles=a;this.raisePropertyChanged("StrengthStyles")}},get_TextStrengthDescriptionStyles:function(){return this.get_StrengthStyles()},set_TextStrengthDescriptionStyles:function(a){this.set_StrengthStyles(a)},get_HelpHandleCssClass:function(){return this._helpHandleCssClass},set_HelpHandleCssClass:function(a){if(this._helpHandleCssClass!=a){this._helpHandleCssClass=a;this.raisePropertyChanged("HelpHandleCssClass")}},get_HelpHandlePosition:function(){return this._helpHandlePosition},set_HelpHandlePosition:function(a){if(this._helpHandlePosition!=a){this._helpHandlePosition=a;this.raisePropertyChanged("HelpHandlePosition")}},get_HelpText:function(){return this._helpText},get_CalculationWeightings:function(){return this._calcWeightings},set_CalculationWeightings:function(a){if(this._calcWeightings!=a){this._calcWeightings=a;this.raisePropertyChanged(k)}},set_HelpText:function(d){var a=this;if(a._helpStatusLabelID){var b=$get(a._helpStatusLabelID);if(b)if(Sys.Extended.UI.TextBoxWrapper.get_Wrapper(a.get_element()).get_Value().length>0)b.innerHTML=d;else b.innerHTML=c}if(a._helpText!=d){a._helpText=d;a.raisePropertyChanged("HelpText")}},get_MinimumLowerCaseCharacters:function(){return this._minLowerCaseChars},set_MinimumLowerCaseCharacters:function(a){this._minLowerCaseChars=a},get_MinimumUpperCaseCharacters:function(){return this._minUpperCaseChars},set_MinimumUpperCaseCharacters:function(a){this._minUpperCaseChars=a},get_HelpStatusLabelID:function(){return this._helpStatusLabelID},set_HelpStatusLabelID:function(a){if(this._helpStatusLabelID!=a){this._helpStatusLabelID=a;this.raisePropertyChanged("HelpStatusLabelID")}}};Sys.Extended.UI.PasswordStrengthExtenderBehavior.registerClass("Sys.Extended.UI.PasswordStrengthExtenderBehavior",Sys.Extended.UI.BehaviorBase);Sys.registerComponent(Sys.Extended.UI.PasswordStrengthExtenderBehavior,{name:"passwordStrength"});Sys.Extended.UI.StrengthIndicatorTypes=function(){throw Error.invalidOperation();};Sys.Extended.UI.DisplayPosition=function(){throw Error.invalidOperation();};Sys.Extended.UI.StrengthIndicatorTypes.prototype={Text:0,BarIndicator:1};Sys.Extended.UI.DisplayPosition.prototype={RightSide:0,AboveRight:1,AboveLeft:2,LeftSide:3,BelowRight:4,BelowLeft:5};Sys.Extended.UI.DisplayPosition.registerEnum("Sys.Extended.UI.DisplayPosition");Sys.Extended.UI.StrengthIndicatorTypes.registerEnum("Sys.Extended.UI.StrengthIndicatorTypes")}if(window.Sys&&Sys.loader)Sys.loader.registerScript(b,["ExtendedBase","ExtendedCommon"],a);else a()})();