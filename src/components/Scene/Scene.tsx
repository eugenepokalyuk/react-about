/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useRef } from 'react';
import Matter from 'matter-js';

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

    const tabletSize = 1024;

    const ifMobileW = (x: any, y: any) => {
        return (window.innerWidth <= tabletSize ? x : y)
    }

    const ifMobileH = (x: any, y: any) => {
        return (window.innerHeight <= tabletSize ? x : y)
    }

    const CANVAS_WIDTH = ifMobileW(window.innerWidth, (window.innerWidth - 700))
    const CANVAS_HEIGHT = ifMobileH((window.innerHeight - 200), window.innerHeight)

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
        
        context.font = ifMobileW('16px IBM Plex Mono', '28px IBM Plex Mono');

        const randomInRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

        const figures = sceneData.map((item) => {
            const textSize = context.measureText(item.name);
            
            const textWidth = ifMobileW((textSize.width + 50), (textSize.width + 60)); // 8px padding с каждой стороны
            // const textWidth = textSize.width + 50;
            
            const textHeight = 60;
            // const textHeight = ifMobile(60, 60); // Высота текста + padding
            
            const figure: any = Matter.Bodies.rectangle(randomInRange(100, CANVAS_WIDTH), 100, textWidth, textHeight, {
                angle: 0,
                chamfer: {},
                render: {
                    visible: false,
                    fillStyle: item.backgroundColor
                }
            });
            
            figure.label = item.name;
            
            figure.color = item.color;
            
            figure.width = textWidth;
            
            figure.height = textHeight - 5;
            
            return figure;
        });

        const ground = Matter.Bodies.rectangle(CANVAS_WIDTH / 2, CANVAS_HEIGHT, CANVAS_WIDTH, 30, {
            isStatic: true, render: {
                fillStyle: 'transparent',
            }
        });
        
        const leftWall = Matter.Bodies.rectangle(0, CANVAS_HEIGHT / 2, 30, CANVAS_HEIGHT, {
            isStatic: true, render: {
                fillStyle: 'transparent',
            }
        });
        
        const rightWall = Matter.Bodies.rectangle(CANVAS_WIDTH + 10, CANVAS_HEIGHT / 2, 30, CANVAS_HEIGHT, {
            isStatic: true, render: {
                fillStyle: 'transparent',
            }
        });
        
        const topWall = Matter.Bodies.rectangle(CANVAS_WIDTH / 2, 0, CANVAS_WIDTH, 30, {
            isStatic: true, render: {
                fillStyle: 'transparent',
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

        // // Создание обработчика столкновений
        // Matter.Events.on(engine, 'collisionStart', function (event: any) {
        //     let pairs: any = event.pairs;
        //     // Перебор всех столкновений
        //     pairs.forEach(function (pair: any) {
        //         // Получение столкнувшихся объектов
        //         var bodyA = pair.bodyA;
        //         var bodyB = pair.bodyB;
        //         if (bodyA.isSensor || bodyB.isSensor) {
        //             navigator.vibrate([100, 50, 100]);
        //         }
        //     });
        // });

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
        <div id="skillbox" ref={boxRef} className={`${window.innerWidth <= tabletSize ? '' : 'absolute bottom-0 '} flex justify-start items-center z-10`}></div>
    )
};

export default Scene;
