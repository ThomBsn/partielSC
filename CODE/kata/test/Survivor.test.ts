import {Orientation} from "../enum/Orientation"
describe('Zoo', () => {

    // GIVEN

    beforeEach(() => {
        survivor = new Survivor(4, 4, Orientation.Est, 100);
    });

    it.each(
        [
            {survivorAction:"forward", expectedX: 5, expectedY: 4, expectedOrientation: Orientation.Est},
            {survivorAction:"turn left", expectedX: 4, expectedY: 4, expectedOrientation: Orientation.North},
            {survivorAction:"right", expectedX: 4, expectedY: 5, expectedOrientation: Orientation.Est},
        ])
    ('should move in the correct direction', (params) => {
        // WHEN
        survivor.explore(params.survivorAction)

        // THEN
        expect(survivor.x).toBe(params.expectedX);
        expect(survivor.y).toBe(params.expectedY);
        expect(survivor.orientation).toBe(params.expectedOrientation);
    });
});