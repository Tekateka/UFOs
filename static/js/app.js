renderData(data);
d3.selectAll('input').on('change',handleChange);

function renderData(data) {
    d3.select('tbody').html('');

    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>row.append('td').text(val))
    });
};

function handleChange() {
    let newData = data;

    d3.selectAll('input')._groups[0].forEach(({id,value})=>{
        if(value){
            newData = newData.filter(obj=>obj[id]==value);
        };
    });

    renderData(newData);
};