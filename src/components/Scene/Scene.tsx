import Matter from 'matter-js';
import { FC, useEffect, useRef } from 'react';

interface SceneProps {
    sceneData: {
        name: string,
        color: string,
        backgroundColor: string
    }[]
}
const Scene: FC<SceneProps> = ({ sceneData }) => {
    const boxRef: any = useRef();
    const engineRef: any = useRef();

    const ifMobile = (x: any, y: any) => {
        return (window.innerWidth <= 768 ? x : y)
    }

    const CANVAS_WIDTH = ifMobile(window.innerWidth, (window.innerWidth * 0.6))
    const CANVAS_HEIGHT = ifMobile((window.innerHeight / 1.5), window.innerHeight)

    useEffect(() => {
        engineRef.current = Matter.Engine.create();
        const engine = engineRef.current;
        const render = Matter.Render.create({
            element: boxRef.current,
            engine: engine,
            options: {
                width: CANVAS_WIDTH,
                height: CANVAS_HEIGHT,
                wireframes: false,
                background: 'transparent'
            }
        });

        const context = render.context;
        context.font = ifMobile('24px IBM Plex Mono', '32px IBM Plex Mono');

        const randomInRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

        const figures = sceneData.map((item) => {
            const textSize = context.measureText(item.name);
            const textWidth = ifMobile((textSize.width + 24), (textSize.width + 60)); // 8px padding с каждой стороны
            // context.font = ifMobile('16px IBM Plex Mono', '32px IBM Plex Mono');

            // const textWidth = textSize.width + 19; // 8px padding с каждой стороны
            const textHeight = 60; // Высота текста + padding
            // const textHeight = 32; // Высота текста + padding

            const figure: any = Matter.Bodies.rectangle(randomInRange(100, CANVAS_WIDTH), 100, textWidth, textHeight + 5, {
                // const figure: any = Matter.Bodies.rectangle(100, 100, textWidth, textHeight, {
                angle: 0,
                // angle: -1.62,
                chamfer: {},
                render: {
                    visible: false,
                    fillStyle: item.backgroundColor
                }
            });
            figure.label = item.name;
            figure.color = item.color;
            figure.width = textWidth;
            figure.height = textHeight;
            return figure;
        });

        const ground = Matter.Bodies.rectangle(CANVAS_WIDTH / 2, CANVAS_HEIGHT, CANVAS_WIDTH, 30, {
            isStatic: true, render: {
                fillStyle: 'transparent',
                // fillStyle: 'red',
            }
        });
        const leftWall = Matter.Bodies.rectangle(0, CANVAS_HEIGHT / 2, 30, CANVAS_HEIGHT, {
            isStatic: true, render: {
                fillStyle: 'transparent',
                // fillStyle: 'green',
            }
        });
        const rightWall = Matter.Bodies.rectangle(CANVAS_WIDTH + 10, CANVAS_HEIGHT / 2, 30, CANVAS_HEIGHT, {
            isStatic: true, render: {
                fillStyle: 'transparent',
                // fillStyle: 'blue',
            }
        });
        const topWall = Matter.Bodies.rectangle(CANVAS_WIDTH / 2, 0, CANVAS_WIDTH, 30, {
            isStatic: true, render: {
                fillStyle: 'transparent',
                // fillStyle: 'hotpink',
            }
        });

        // Добавление MouseConstraint
        const mouse = Matter.Mouse.create(render.canvas);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

        Matter.World.add(engine.world, [ground, leftWall, rightWall, topWall, mouseConstraint]);
        Matter.World.add(engine.world, figures);

        Matter.Events.on(render, 'afterRender', () => {
            figures.forEach((figure) => {
                context.save(); // Сохраняем текущее состояние контекста

                // Перемещаем контекст к центру фигуры и вращаем
                context.translate(figure.position.x, figure.position.y);
                context.rotate(figure.angle);

                // Рисуем прямоугольник с округленными углами
                context.fillStyle = figure.render.fillStyle;
                context.roundRect(-figure.width / 2, -figure.height / 2, figure.width, figure.height, 32);
                context.fill();

                // Рисуем текст
                context.fillStyle = figure.color;
                context.textAlign = 'center';
                context.textBaseline = 'middle';
                context.fillText(figure.label, 0, 0);

                context.restore(); // Восстанавливаем состояние контекста
            });
        });
        // Добавление функции для рисования прямоугольника с округленными углами
        CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius: any) {
            this.beginPath();
            this.moveTo(x + radius, y);
            this.lineTo(x + width - radius, y);
            this.quadraticCurveTo(x + width, y, x + width, y + radius);
            this.lineTo(x + width, y + height - radius);
            this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            this.lineTo(x + radius, y + height);
            this.quadraticCurveTo(x, y + height, x, y + height - radius);
            this.lineTo(x, y + radius);
            this.quadraticCurveTo(x, y, x + radius, y);
            this.closePath();
        };

        // Запуск движка и рендерера
        Matter.Engine.run(engine);
        Matter.Render.run(render);

        // Очистка при размонтировании компонента
        return () => {
            Matter.Render.stop(render);
            Matter.World.clear(engine.world, false);
            Matter.Engine.clear(engine);
            render.canvas.remove();
        };

    }, [sceneData]);

    return (
        // 
        <div id="skillbox" ref={boxRef} className={`${window.innerWidth <= 768 ? '' : 'absolute bottom-0 '} flex justify-start items-center z-10`}></div>
    )
};

export default Scene;