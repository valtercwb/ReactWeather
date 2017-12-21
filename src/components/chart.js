import React from 'react';
import _ from 'lodash';
import { Sparklines , SparklinesLine , SparklinesReferenceLine} from 'react-sparklines';

function average(data){
    var result = _.floor(_.sum(data)/data.length);
    return result;
}

export default (props)=>{
return(
    <div>
        <Sparklines height={120} width={180} data={ props.data }>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        <div>{average(props.data)} {props.units}</div>
    </div>
);
}