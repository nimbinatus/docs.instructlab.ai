console.log("Initialize graph");

const datas = {
    "name": "root",
    "children": [{
        "name": "knowledge",
        "children": [
            {
                "name": "arts and recreation",
                "children": [
                    {
                        "name": "cinema and film",
                        "children": [
                            {
                                "name": "genres",
                                "children": [
                                    {"name": "..."},
                                ],
                            },
                            {
                                "name": "techniques",
                                "children": [
                                    {"name": "..."},
                                ],
                            },
                        ],
                    },
                    {
                        "name": "culinary",
                        "children": [
                            {"name": "cooking"},
                            {"name": "cuisines"},
                            {"name": "food preparation"},
                            {"name": "presentation"},
                            {"name": "..."},
                        ],
                    },
                    {
                        "name": "fiber arts",
                        "children": [
                            {"name": "crocheting"},
                            {"name": "knitting"},
                            {"name": "sewing"},
                            {"name": "weaving"},
                            {"name": "..."},
                        ],
                    },
                    {
                        "name": "node1",
                        "children": [
                            {"name": "..."},
                            {"name": "..."}
                        ],
                    },
                    {"name": "..."}
                ],
            },
            {
                "name": "engineering",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "geography",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "history",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "linguistics",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "mathematics",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "philosophy",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "religion",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "science",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "technology",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
        ]
    }, {
        "name": "foundational skills",
        "children": [{
            "name": "reasoning",
            "children": [
                {"name": "common sense"},
                {
                    "name": "linguistics",
                    "children": [
                        {"name": "logical sequence of words"},
                        {"name": "object identification"},
                        {"name": "odd one out"},
                    ]
                },
                {"name": "logical"},
                {"name": "mathematical"},
                {"name": "temporal"},
                {"name": "theory of mind"},
                {"name": "unconventional"},
            ],
        }]
    }, {
        "name": "compositional skills",
        "children": [
            {
                "name": "arts and recreation",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "engineering",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "geography",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "grounded",
                "children": [
                    {
                        "name": "arts and recreation",
                        "children": [
                            {"name": "..."},
                            {"name": "..."}
                        ],
                    }, {
                        "name": "engineering",
                        "children": [
                            {"name": "..."},
                            {"name": "..."}
                        ],
                    }, {
                        "name": "geography",
                        "children": [
                            {"name": "..."},
                            {"name": "..."}
                        ],
                    }, {
                        "name": "history",
                        "children": [
                            {"name": "..."},
                            {"name": "..."}
                        ],
                    }, {
                        "name": "linguistics",
                        "children": [
                            {"name": "inclusion"}, {
                                "name": "writing",
                                "children": [
                                    {"name": "rewriting"},
                                    {"name": "..."}
                                ],
                            },
                        ],
                    }, {
                        "name": "philosophy",
                        "children": [
                            {"name": "..."},
                            {"name": "..."}
                        ],
                    }, {
                        "name": "religion",
                        "children": [
                            {"name": "..."},
                            {"name": "..."}
                        ],
                    }, {
                        "name": "science",
                        "children": [
                            {"name": "..."},
                            {"name": "..."}
                        ],
                    }, {
                        "name": "technology",
                        "children": [
                            {"name": "..."},
                            {"name": "..."}
                        ],
                    },
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "..."},
                    {"name": "..."}
                ],
            },
        ]
    }]
};

const targetNode = document.getElementById("gcontainer");

const observer = new MutationObserver(function (mutations) {
    if (targetNode) {
        console.log("the container now exists");
        console.log(targetNode);
        observer.disconnect();
        let final_node = run_me();
        gcontainer.append(final_node);
    } else {
        console.log("the element never existed");
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

function run_me() {
    // Specify the charts’ dimensions. The height is variable, depending on the layout.
    const width = 928;
    const marginTop = 10;
    const marginRight = 10;
    const marginBottom = 10;
    const marginLeft = 40;

    // Rows are separated by dx pixels, columns by dy pixels. These names can be counter-intuitive
    // (dx is a height, and dy a width). This because the tree must be viewed with the root at the
    // “bottom”, in the data domain. The width of a column is based on the tree’s height.
    const root = d3.hierarchy(datas);
    const dx = 20;
    const dy = (width - marginRight - marginLeft + 500)  / (1 + root.height);

    // Define the tree layout and the shape for links.
    const tree = d3.tree().nodeSize([dx, dy]);
    const diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);

    // Create the SVG container, a layer for the links and a layer for the nodes.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", dx)
        .attr("viewBox", [-marginLeft, -marginTop, width, dx])
        .attr("style", "max-width: 100%; height: auto; font: 14px sans-serif; user-select: none;");

    const gLink = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5);

    const gNode = svg.append("g")
        .attr("cursor", "pointer")
        .attr("pointer-events", "all");

    function update(event, source) {
        const duration = event?.altKey ? 2500 : 250; // hold the alt key to slow down the transition
        const nodes = root.descendants().reverse();
        const links = root.links();

        // Compute the new tree layout.
        tree(root);

        let left = root;
        let right = root;
        root.eachBefore(node => {
            if (node.x < left.x) left = node;
            if (node.x > right.x) right = node;
        });

        const height = right.x - left.x + marginTop + marginBottom;

        const transition = svg.transition()
            .duration(duration)
            .attr("height", height)
            .attr("viewBox", [-marginLeft, left.x - marginTop, width, height])
            .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

        // Update the nodes…
        const node = gNode.selectAll("g")
            .data(nodes, d => d.id);

        // Enter any new nodes at the parent's previous position.
        const nodeEnter = node.enter().append("g")
            .attr("transform", d => `translate(${source.y0},${source.x0})`)
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0)
            .on("click", (event, d) => {
                d.children = d.children ? null : d._children;
                update(event, d);
            });

        nodeEnter.append("circle")
            .attr("r", 3.5)
            .attr("fill", d => d._children ? "#ff0000" : "#0021ff")
            .attr("stroke-width", 10);

        nodeEnter.append("text")
            .attr("dy", "0.5em")
            .attr("x", d => d._children ? -6 : 6)
            .attr("text-anchor", d => d._children ? "end" : "start")
            .text(d => d.data.name)
            .attr("stroke-linejoin", "round")
            .attr("stroke-width", 8)
            .attr("stroke", "white")
            .attr("paint-order", "stroke");

        // Transition nodes to their new position.
        const nodeUpdate = node.merge(nodeEnter).transition(transition)
            .attr("transform", d => `translate(${d.y},${d.x})`)
            .attr("fill-opacity", 1)
            .attr("stroke-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        const nodeExit = node.exit().transition(transition).remove()
            .attr("transform", d => `translate(${source.y},${source.x})`)
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0);

        // Update the links…
        const link = gLink.selectAll("path")
            .data(links, d => d.target.id);

        // Enter any new links at the parent's previous position.
        const linkEnter = link.enter().append("path")
            .attr("d", d => {
                const o = {x: source.x0, y: source.y0};
                return diagonal({source: o, target: o});
            });

        // Transition links to their new position.
        link.merge(linkEnter).transition(transition)
            .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition(transition).remove()
            .attr("d", d => {
                const o = {x: source.x, y: source.y};
                return diagonal({source: o, target: o});
            });

        // Stash the old positions for transition.
        root.eachBefore(d => {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    // Do the first update to the initial configuration of the tree — where a number of nodes
    // are open (arbitrarily selected as the root, plus nodes with 7 letters).
    root.x0 = dy / 2;
    root.y0 = 0;
    root.descendants().forEach((d, i) => {
        d.id = i;
        d._children = d.children;
        if (d.depth === 2) {
            d.children = null
        }
    });

    update(null, root);

    // // Checkboxes
    // const expand_button = document.querySelector('input[type="button"]')
    // expand_button.addEventListener("click", updateButton);
    // const storage = root;
    // function updateButton() {
    //     if (expand_button.value === "expand") {
    //         expand_button.value = "collapse";
    //         storage.descendants().forEach((d, i) => {
    //             d.id = i;
    //             if (d.depth !== 0) {
    //                 d.children = d._children
    //             }
    //         });
    //         console.log("expand", storage.descendants());
    //     } else {
    //         expand_button.value = "expand";
    //         storage.descendants().forEach((d, i) => {
    //             d.id = i;
    //             d._children = d.children;
    //             if (d.depth !== 0) {
    //                 d.children = null
    //             }
    //         });
    //         console.log("collapse", storage.descendants());
    //     }
    //     update(null, storage);
    // }

    return svg.node();
}