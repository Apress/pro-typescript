module Listing1_61 {

    class DomainId<T> {
        constructor(public id: T) {

        }

        get value(): T {
            return this.id;
        }
    }

    class OrderId extends DomainId<number> {
        constructor(public orderIdValue: number) {
            super(orderIdValue);
        }
    }

    class AccountId extends DomainId<string> {
        constructor(public accountIdValue: string) {
            super(accountIdValue);
        }
    }

} 