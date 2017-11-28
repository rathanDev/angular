
public class Bike {

    Battery battery;

    Bike(Battery battery) {
        this.battery = battery;
    }

    void start() {
        System.out.println("Bike starts using " + battery.getPower());
    }

}
