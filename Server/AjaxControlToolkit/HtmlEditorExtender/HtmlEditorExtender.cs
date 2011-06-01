﻿using System.Web.UI;
using System.Web.UI.WebControls;
using AjaxControlToolkit;
using System.ComponentModel;

[assembly: WebResource("HtmlEditorExtender.HtmlEditorExtenderBehavior.js", "text/javascript")]
[assembly: WebResource("HtmlEditorExtender.HtmlEditorExtenderBehavior.debug.js", "text/javascript")]

namespace AjaxControlToolkit
{
    
    [TargetControlType(typeof(TextBox))]
    [RequiredScript(typeof(CommonToolkitScripts), 0)]
    [ClientScriptResource("AjaxControlToolkit.HtmlEditorExtenderBehavior", "HtmlEditorExtender.HtmlEditorExtenderBehavior.js")]
    public class HtmlEditorExtender : ExtenderControlBase
    {
        
    }

}