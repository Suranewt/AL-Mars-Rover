import { Rover, Orientation } from "./rover";



describe(`Un rover peut avancer`, () => {
    test.each([1, 3, 5, 6, 8, 10])(
        `ETANT DONNE un rover dirigé vers le NORD, ` +
            `QUAND il avance de %s cases ` +
            `ALORS position y augmente d'autant`,
        (n) => {
            const ROVER_INIT = new Rover(0, 0, 'N');
            const ROVER_FINAL = new Rover(0, 0, 'N');

            ROVER_FINAL.avancer(n);

            expect(ROVER_FINAL.getPosition().getPosY()).toEqual(
                ROVER_INIT.getPosition().getPosY() + n
            );
        }
    );
})