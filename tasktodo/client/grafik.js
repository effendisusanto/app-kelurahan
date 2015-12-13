Meteor.subscribe("dataGrafik")

function drawChart() {
    //clear the contents of the div, in the event this function is called more than once.
    $('#myfirstchart').empty();

    data = true

    if (data) {
        new Morris.Bar({
            element: 'myfirstchart',
            data: [
                { y: '2006', a: 100},
                { y: '2007', a: 75 },
                { y: '2008', a: 50 },
                { y: '2009', a: 75 },
                { y: '2010', a: 50 },
                { y: '2011', a: 75 },
                { y: '2012', a: 100 }
            ],
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Series A']
        });
    };
}

Template.grafik.onRendered(function() {
    drawChart()
});
