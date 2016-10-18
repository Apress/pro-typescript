module Listing1_8 {

    enum VehicleType {
        PedalCycle,
        MotorCycle,
        Car,
        Van,
        Bus,
        Lorry
    }

    var type = VehicleType.Lorry;

    var typeName = VehicleType[type]; // 'Lorry'

} 