export class DeltaMaker {
    static interval: number = 200

    public static generate(): number {
        return Math.round(Math.random() * 100);
    }
}