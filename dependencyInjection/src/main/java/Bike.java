
public class Bike {

    Battery battery;

    Bike(Battery battery) {
        this.battery = battery;
//        battery = new XBattery();
    }

    void start() {
        System.out.println("Bike starts using " + battery.getPower());
    }

}
