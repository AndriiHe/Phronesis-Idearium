{% code-walkthrough
  filesets=[
    {
      "files": ["../redocly.yaml", "../index.md"],
      "downloadAssociatedFiles": ["../package.json"],
    }
  ]
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

  {% step id="step4" heading="Header at MD" %}
    Here is a header.
    {% input id="header-name" placeholder="Header name" label="Header name" /%}
  {% /step %}

  {% step id="step5" heading="Admonition" %}
    Here is an admonition tag.
  {% /step %}

  {% step id="step6" heading="Cards columns" %}
    Here are cards columns.
  {% /step %}

{% /code-walkthrough %}