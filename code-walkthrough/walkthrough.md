{% code-walkthrough
  filesets=[
    {
      "files": ["../redocly.yaml", "../index.md"],
      "downloadAssociatedFiles": ["../package.json"],      
      "when": { "file-type": "Markdown" }
    },
    {
      "files": ["../redocly.yaml", "./index.page.tsx"],
      "downloadAssociatedFiles": ["../package.json"],
      "when": { "file-type": "React" }
    }
  ]
  filters={
    "file-type": {
      "label": "File type",
      "items": [{"value": "Markdown"}, {"value": "React"}]
    }
  }
%}
  # Code Walkthrough Title

  Add steps and explanations here to guide users through the code.
  {% step id="step1" heading="Logo" %}
    Here is a logo.
  {% /step %}

  {% step id="step2" heading="Navbar" %}
    Here is a navbar.
  {% /step %}

  {% step id="step3" heading="Footer" %}
    Here is a footer.
  {% /step %}

  {% step id="step4" 
      heading="Header at MD"     
      when={ "file-type": ["Markdown"] }
  %}
    Here is a header.
    {% input id="header-name" placeholder="Header name" label="Header name" /%}
  {% /step %}

  {% 
  toggle id="logs" label="Add logging" when={ "file-type": ["Markdown"] }
  %}
      {% slot "description" %}
        Enable logs to help debug issues and monitor your application.
      {% /slot %}

      {% step id="error-logs" heading="Add Error Logs" %}
        Add exception and error logs
      {% /step %}
    {% /toggle %}

  {% 
    step id="step5" 
    heading="Admonition"       
    when={ "file-type": ["Markdown"] }
  %}
  {% /step %}

  {%step id="step6" 
    heading="Cards columns" 
    when={ "file-type": ["Markdown"] }
   %}
    Here are cards columns.
  {% /step %}   

    
  {%
    step id="select-dom" 
    heading="Cards columns" 
    when={ "file-type": ["React"] }
  %}
    Here are React step
  {% /step %} 

{% /code-walkthrough %}