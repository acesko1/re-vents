import { useDispatch } from "react-redux";
import { asyncActionFinish, asyncActionStart, asyncActionError } from "../async/asyncReducer";
import {useEffect} from 'react';
import { dataFromSnapshot } from "../firestore/firestoreService";

export default function useFirestoreDoc({query, data, deps, shouldExecute = true}){
    const dispatch = useDispatch();

    useEffect(() => {
        if(!shouldExecute) return;
        dispatch(asyncActionStart());
        const unsubscribe = query().onSnapshot(
            snapshot => {
                if(!snapshot.exists) {
                    dispatch(asyncActionError({code: 'not-found', message: 'Could not find document'}));
                    return;
                }
                data(dataFromSnapshot(snapshot));
                dispatch(asyncActionFinish());
            },
            error => dispatch(asyncActionError())
        );
        return() => {
            unsubscribe()
        }
    }, deps) //eslint-disable-line react-hooks/exhaustive-deps
}