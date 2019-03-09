exports.calculateRate = (req) => {
    const weight = parseFloat(req.body.weight);
    const deliveryType = req.body.dtype;
    let cost;

    if(deliveryType === 'letters-stamped' || deliveryType === 'letters-metered'){
        if(weight <= 1 ){
            cost = 0.5;
        }
        else if(weight <= 2) {
            cost = 0.65;
        }
        else if(weight <= 3) {
            cost = 0.80;
        }
        else{
            cost = 0.95;
        }

        if(deliveryType === 'letters-stamped'){
            cost += 0.05
        }
    }

    return cost.toFixed(2);

}