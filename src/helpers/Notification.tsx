
import React, { useEffect } from "react";

export type NotificationListener<InfoType> = (...info: InfoType extends undefined ? [] : [InfoType]) => void;

export interface NotificationType<InfoType> {
    post(...info: InfoType extends undefined ? [] : [InfoType]): void;
    addListener(listener: NotificationListener<InfoType>): () => void;
    removeListener(listener: NotificationListener<InfoType>): void;
}

export default function Notification<InfoType = undefined>(): NotificationType<InfoType> {

    const listeners = new Set<NotificationListener<InfoType>>();

    const post: NotificationType<InfoType>['post'] = function (...args) {
        // just looping through the listeners, typescript is giving me an error when I try to use a for of loop to do it... don't feel like figuring out if I should change the tsconfig file.
        const keys = listeners.keys();
        let next = keys.next();
        while (next.done !== true) {
            // checking to make sure the listener is still in the listeners map because a listener call on a previous while loop iteration could have removed it.
            if (listeners.has(next.value)) {
                next.value(...args);
            }
            next = keys.next();
        }
    }

    function addListener(listener: NotificationListener<InfoType>) {
        listeners.add(listener);
        return () => removeListener(listener);
    }

    function removeListener(listener: NotificationListener<InfoType>) {
        listeners.delete(listener);
    }

    return { post, addListener, removeListener };
}


export function useNotificationListener<InfoType = {}>(
    notification: NotificationType<InfoType>,
    listener: NotificationListener<InfoType>,
    dependencyList?: React.DependencyList) {
        
    useEffect(() => {
        return notification.addListener(listener);
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, dependencyList ?? []);
        
}

