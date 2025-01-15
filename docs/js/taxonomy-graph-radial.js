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
                        "name": "node1",
                        "children": [
                            {"name": "subnode1.1"},
                            {"name": "subnode1.2"}
                        ],
                    },
                    {
                        "name": "node1",
                        "children": [
                            {"name": "subnode1.1"},
                            {"name": "subnode1.2"}
                        ],
                    },
                    {
                        "name": "node1",
                        "children": [
                            {"name": "subnode1.1"},
                            {"name": "subnode1.2"}
                        ],
                    },
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "engineering",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "geography",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "history",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "linguistics",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "mathematics",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "philosophy",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "religion",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "science",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "technology",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
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
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "engineering",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "geography",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "grounded",
                "children": [
                    {
                        "name": "arts and recreation",
                        "children": [
                            {"name": "subnode1.1"},
                            {"name": "subnode1.2"}
                        ],
                    }, {
                        "name": "engineering",
                        "children": [
                            {"name": "subnode1.1"},
                            {"name": "subnode1.2"}
                        ],
                    }, {
                        "name": "geography",
                        "children": [
                            {"name": "subnode1.1"},
                            {"name": "subnode1.2"}
                        ],
                    }, {
                        "name": "history",
                        "children": [
                            {"name": "subnode1.1"},
                            {"name": "subnode1.2"}
                        ],
                    }, {
                        "name": "linguistics",
                        "children": [
                            {"name": "inclusion"}, {
                                "name": "writing",
                                "children": [
                                    {"name": "rewriting"},
                                    {"name": "subnode1.2"}
                                ],
                            },
                        ],
                    }, {
                        "name": "philosophy",
                        "children": [
                            {"name": "subnode1.1"},
                            {"name": "subnode1.2"}
                        ],
                    }, {
                        "name": "religion",
                        "children": [
                            {"name": "subnode1.1"},
                            {"name": "subnode1.2"}
                        ],
                    }, {
                        "name": "science",
                        "children": [
                            {"name": "subnode1.1"},
                            {"name": "subnode1.2"}
                        ],
                    }, {
                        "name": "technology",
                        "children": [
                            {"name": "subnode1.1"},
                            {"name": "subnode1.2"}
                        ],
                    },
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
            {
                "name": "node1",
                "children": [
                    {"name": "subnode1.1"},
                    {"name": "subnode1.2"}
                ],
            },
        ]
    }]
};

const data2 = {
    "name": "Easing",
    "children": [{
        "name": "animate",
        "children": [{
            "name": "wefwef",
            "size": 17010,
            "color": "red"
        }, {
            "name": "fqwefqwef",
            "size": 5842,
            "color": "red"
        }, {"name": "fqwfefef", "size": 1041, "color": "red"}]
    }, {
        "name": "data",
        "children": [{
            "name": "fefw",
            "size": 1759,
            "color": "blue"
        }, {"name": "fwfwf", "size": 2165, "color": "blue"}, {
            "name": "fefe",
            "size": 586,
            "color": "blue"
        }, {
            "name": "wfwwef",
            "size": 3331,
            "color": "blue"
        }, {"name": "fwefwefc", "size": 772, "color": "blue"}]
    }, {
        "name": "display",
        "children": [{
            "name": "fefe",
            "size": 8833,
            "color": "purple"
        }, {"name": "fef", "size": 1732, "color": "purple"}]
    }, {
        "name": "physics",
        "children": [{
            "name": "wfwef",
            "size": 1082,
            "color": "pink"
        }, {"name": "qwef", "size": 1336, "color": "pink"}, {
            "name": "ccca",
            "size": 319,
            "color": "pink"
        }, {"name": "cdcds", "size": 10498, "color": "pink"}, {
            "name": "axasx",
            "size": 2822,
            "color": "pink",
            "children": []
        }, {"name": "fwew", "size": 9983, "color": "pink"}]
    }]
}

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
    function separation(a, b) {
        return (a.parent === b.parent ? 1 : 3) / a.depth;
    }

    const width = 932
    const radius = 517.77777777777

    let loadtest = true;
    // const taxonomy = d3.hierarchy(datas);
    const tree = data => d3.tree()
        .size([2 * Math.PI, radius])
        .separation(separation)
        (d3.hierarchy(datas));

    const svg_node = d3.create("svg")
        .attr("width", width)
        .attr("height", width)
        .attr("padding", "10px")
        .style("box-sizing", "border-box")
        .style("font", "12px sans-serif");

    const g = svg_node.append("g")
        .attr("cursor", "pointer")
        .attr("pointer-events", "all");

    const linkgroup = g.append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 3.5);

    const nodegroup = g.append("g");
    const trans = (animate) => d3.transition()
        .on("end", function () {
            const box = g.node().getBBox();
            svg_node.transition().duration(1000).attr("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`);
        });

    function new_data(animate = true, the_data = datas) {
        let root = tree(the_data);
        let links_data = root.links();

        let links = linkgroup
            .selectAll("path")
            .data(links_data, d => d.source.data.name + "_" + d.target.data.name);

        links.exit().remove();

        links
            .enter()
            .append("path")
            .attr("d", d3.linkRadial()
                .angle(d => d.x)
                .radius(10.1));

        linkgroup.selectAll("path")
            .transition()
            .on("end", function () {
                const box = g.node().getBBox();
                svg_node.transition().duration(1000).attr("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`);
                nodegroup.selectAll("g text")
                    .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
                    .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
            })
            .attr("d", d3.linkRadial()
                .angle(d => d.x)
                .radius(d => d.y));

        let nodes_data = root.descendants().reverse();

        let nodes = nodegroup
            .selectAll("g")
            .data(nodes_data, function (d) {
                if (d.parent) {
                    return d.parent.data.name + d.data.name;
                }
                return d.data.name
            });

        nodes.exit().remove();

        let new_nodes = nodes
            .enter().append("g")
            .on("click", function (event, d) {
                d3.select(this).select('g').remove();
                let altChildren = d.data.altChildren || [];
                let children = d.data.children;
                const hasChildren = d.children || (children && (children.length > 0 || altChildren.length > 0)) ? true : false;
                d.data.children = altChildren;
                d.data.altChildren = children;
                if (loadtest) {
                    if (hasChildren) {
                        new_data();
                    } else {
                        new_data(true, data2);
                        loadtest = false;
                    }
                } else {
                    if (hasChildren) {
                        new_data(true, data2);
                    } else {
                        new_data();
                        loadtest = true;
                    }
                }
            })
            .on("mouseenter", function (event, d) {
                d3.select(this).raise();
                d3.select(this)
                    .append('g').attr("transform", d => `
                rotate(${-(d.x * 180 / Math.PI - 90)})`);
            })
            .on("mouseleave", function (event, d) {
                d3.select(this).select('g').remove();
            });

        let allnodes = animate ? nodegroup.selectAll("g").transition().duration(animate ? 400 : 0)
            .ease(d3.easeLinear)
            .on("end", function () {
                    const box = g.node().getBBox();
                    svg_node.transition().duration(1000).attr("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`);
                }
            ) : nodegroup.selectAll("g");

        allnodes
            .attr("transform", d => `
            rotate(${d.x * 180 / Math.PI - 90})
            translate(${d.y},0)
          `);

        new_nodes.append("circle")
            .attr("r", 12)
            .style("fill", d => d.data.color ? d.data.color : 'grey');

        new_nodes.append("text")
            .attr("dy", "0.5em")
            .text(d => d.data.color ? d.data.color : d.data.name);

        new_nodes.append('foreignObject')
            .attr('x', '10')
            .attr('y', '10')
            .attr('width', '100')
            .attr('height', '100')
            .attr('class', 'svg-foreignObject');

        nodegroup.selectAll("g text")
            .attr("dx", d => d.x < Math.PI === !d.children ? 16 : -16)
            .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
            .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null);

    }

    // console.log("val is", taxonomy.descendants().length);
    // taxonomy.nodes.forEach((child_node, d) => {
    //     d3.select(this).select('g')
    // });

    new_data(false);

    const box = g.node().getBBox();

    svg_node.remove()
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("viewBox", `${box.x} ${box.y} ${box.width} ${box.height}`);

    return svg_node.node();
}