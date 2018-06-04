import { OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

export class AutoUnsubscribe implements OnDestroy {
    subscriptions: Subscription[] = [];
    ngOnDestroy(): void {
        for(let subscription of this.subscriptions){
            subscription.unsubscribe();
        }
    }
}