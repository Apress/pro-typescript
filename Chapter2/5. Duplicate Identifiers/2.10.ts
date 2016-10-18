// Please note, I have named the example in this file `DeviceMotionEventExample`
// because `DeviceMotionEvent` is in the lib.d.ts file.

interface DeviceMotionEventExample extends Event {
    rotationRate: DeviceRotationRate;
    acceleration: DeviceAcceleration;
    interval: number;
    accelerationIncludingGravity: DeviceAcceleration;
    initDeviceMotionEvent(
        type: string,
        bubbles: boolean,
        cancelable: boolean,
        acceleration: DeviceAccelerationDict,
        accelerationIncludingGravity: DeviceAccelerationDict,
        rotationRate: DeviceRotationRateDict,
        interval: number): void;
}

    declare var DeviceMotionEventExample: {
    prototype: DeviceMotionEventExample;
    new (): DeviceMotionEventExample;
}