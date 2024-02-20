import { Orientation } from '../app/Orientation';
import { Rover } from './../app/Rover';

describe(`Un rover peut avancer`, () => {
    test.each([1, 3, 5, 6, 8, 10])(
        `ETANT DONNE un rover dirigé vers le NORD, ` +
            `QUAND il avance de %s cases ` +
            `ALORS position y augmente d'autant`,
        (n) => {
            const ROVER_INIT = new Rover(0, 0, Orientation.Nord);
            const ROVER_FINAL = new Rover(0, 0, Orientation.Nord);

            ROVER_FINAL.avancer(n);

            expect(ROVER_FINAL.getPosition().getPosY()).toEqual(
                ROVER_INIT.getPosition().getPosY() + n
            );
        }
    );
    test.each([1, 3, 5, 6, 8, 10])(
        `ETANT DONNE un rover dirigé vers le SUD, ` +
            `QUAND il avance de %s cases ` +
            `ALORS position y diminue d'autant`,
        (n) => {
            const ROVER_INIT = new Rover(0, 0, Orientation.Sud);
            const ROVER_FINAL = new Rover(0, 0, Orientation.Sud);

            ROVER_FINAL.avancer(n);

            expect(ROVER_FINAL.getPosition().getPosY()).toEqual(
                ROVER_INIT.getPosition().getPosY() - n
            );
        }
    );
    test.each([1, 3, 5, 6, 8, 10])(
        `ETANT DONNE un rover dirigé vers l'EST, ` +
            `QUAND il avance de %s cases ` +
            `ALORS position x augmente d'autant`,
        (n) => {
            const ROVER_INIT = new Rover(0, 0, Orientation.Est);
            const ROVER_FINAL = new Rover(0, 0, Orientation.Est);

            ROVER_FINAL.avancer(n);

            expect(ROVER_FINAL.getPosition().getPosX()).toEqual(
                ROVER_INIT.getPosition().getPosX() + n
            );
        }
    );
    test.each([1, 3, 5, 6, 8, 10])(
        `ETANT DONNE un rover dirigé vers l'OUEST, ` +
            `QUAND il avance de %s cases ` +
            `ALORS position x diminue d'autant`,
        (n) => {
            const ROVER_INIT = new Rover(0, 0, Orientation.Ouest);
            const ROVER_FINAL = new Rover(0, 0, Orientation.Ouest);

            ROVER_FINAL.avancer(n);

            expect(ROVER_FINAL.getPosition().getPosX()).toEqual(
                ROVER_INIT.getPosition().getPosX() - n
            );
        }
    );
});
