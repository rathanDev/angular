
public class Car {

    Battery battery;

    Car(Battery battery) {
        this.battery = battery;
    }

    void start() {
        System.out.println("Car starts using " + battery.getPower());
    }

}
