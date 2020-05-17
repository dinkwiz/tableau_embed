Console.log(‘I am here’);
Let viz
Const containerdiv = document.getelementbyid(“vizcontainer”)
Const url = "https://public.tableau.com/views/LarryLefttheLightsOn/Dashboard1?:display_count=y&:origin=viz_share_link"
Const options = {Hide tabs: true,}
Function initviz() {viz = new tableau.viz(containerdiv, url, options}
Document.addeventlistener(‘DOMcontentloaded’),initviz);
