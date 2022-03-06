import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import TestPlaceInput from "./TestPlaceInput";
import { increment, decrement } from "./testReducer";
import { useState } from "react";

export default function Sandbox() {
    const dispatch = useDispatch();
    const [target, setTarget] = useState(null);
    const data = useSelector(state=> state.test.data);
    const {loading} = useSelector((state) => state.async);

    return(
        <>
            <h1>Testing 123</h1>
            <h3>The data is: {data} </h3>
            <Button name='increment' loading={loading && target === 'increment'} content='increment' color='green' onClick={(e) =>{ dispatch(increment(20)); setTarget(e.target.name)}}/>
            <Button name='decrement' loading={loading && target === 'decrement'} content='decrement' color='red' onClick={(e) => { dispatch(decrement(10)); setTarget(e.target.name)}}/>
            <Button content='Open modal' color='teal' onClick={() => dispatch(openModal({modalType:'TestModal', modalProps: {data}}))}/>
            <div style={{marginTop: 15}}>
                <TestPlaceInput />
            </div>
        </>
    )
}