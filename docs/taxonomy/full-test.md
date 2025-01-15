---
title: Full taxonomy test
description: A test to show 🐶 InstructLab's Taxonomy.
logo: images/ilab_dog.png
extra_javascript:
  - js/taxonomy-graph.js
---

<!--
<form>
    <input type="button" value="expand" />
</form> -->

<div id="gcontainer" style="height:100%; width:1000px"></div>
<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>

<!--
```mermaid
mindmap
  root((knowledge))
    node1
        subnode1.1
        subnode1.2
        subnode1.3
    node2
        subnode2.1
        subnode2.2
    node3
        subnode3.1
        subnode3.2
    node4
    node5
        subnode5.1
```


<style>

    .graph {

        all: unset;

        display: grid;

        font: 1em "Open Sans", Calibri, sans-serif;

        grid-template-columns: 100px 100px 100px 100px;

        grid-template-rows: 100px 100px 100px 100px;

        grid-template-areas:

            ". . . . ."

            ". . . . ."

            ". . cn . ."

            ". . . . ."

            ". . . . .";

        width: 50%;

    }

    .graph div.center-node {

        color: red;

        grid-area: cn;

    }

    .graph div {

        all: unset;

        /*cursor: pointer;*/

        display: inline;

        padding: .5em;

    }

    .graph summary::before {

        all: unset;

        color: black;

        content: '+';

        font-family: monospace;

        font-weight: bold;

        padding: 0 .5em;

    }

    .graph [open] > summary:first-child::before {

        content: "- ";

    }

    .knowledge-sub {

        display: none !important;

    }

    .graph label {

        background: blue;

        border-radius: .5rem;

        cursor: crosshair;

        padding: .5rem 1rem;

    }

    .button1:checked ~ .knowledge-sub {

        display: contents !important;

    }

    .visually-hidden {

        position: relative;

        left: 2.5rem;

        top: -1rem;

        opacity: 0;

    }

</style>


<div class="graph">

    <div class="center-node">

        <label for="toggle">knowledge</label>

        <input type="radio" id="toggle" class="visually-hidden button1" />

    </div>

    <div class="knowledge-sub">node1</div>

    <div class="node-two">subnode1.1</div>

    <div class="node-two">subnode1.2</div>

    <div class="node-two">subnode1.3</div>

    <div class="knowledge-sub">node2</div>

    <div class="node-two">subnode2.1</div>

    <div class="node-two">subnode2.2</div>

    <div class="knowledge-sub">node3</div>

    <div class="node-two">subnode3.1</div>

    <div class="node-two">subnode3.2</div>

    <div class="knowledge-sub">node4</div>

    <div class="knowledge-sub">node5</div>

    <div class="node-two">subnode5.1</div>

</div>
-->