import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Browser, HouseLine, ShoppingBagOpen, UserCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import avatar1 from "@/assets/image/profile.png"
import project1 from "@/assets/image/ecommerce.png"
import project2 from "@/assets/image/coffee.png"
import project3 from "@/assets/image/maceioin.png"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";


export function Home() {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div className="max-w-7xl mx-auto p-4 lg:px-8 flex flex-col gap-8">
            <header className="w-full bg-card border border-border rounded-2xl p-4 flex items-center justify-between">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuLink href="/">
                            <HouseLine size={32} />
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/">
                            <UserCircle size={26} />
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/">
                            <Browser size={26} />
                        </NavigationMenuLink>
                        <NavigationMenuLink href="/">
                            <ShoppingBagOpen size={26} />
                        </NavigationMenuLink>
                    </NavigationMenuList >
                </NavigationMenu >

                <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
            </header>

            <div className="w-full bg-card border border-border rounded-2xl py-4 px-2">
                <section className="flex flex-col gap-12 px-2 lg:px-12 mb-10">
                    <header className=" flex items-center justify-between">
                        <h2 className="inline-flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-border before:mr-2 before:rounded-full text-sm lg:text-md font-bold text-muted-foreground">Desenvolvedor Web</h2>

                        <p className="inline-flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-lime-500 before:mr-2 before:rounded-full lg:text-xs text-lime-600 uppercase bg-lime-600/10 p-2 rounded-full font-bold text-center text-[10px]">Disponível para trabalho</p>
                    </header>
                    <div className="lg:grid lg:grid-cols-2 items-center flex flex-col-reverse gap-8">
                        <div className=" col-span-1 flex flex-col gap-4">
                            <h1 className=" text-center lg:text-start font-bold text-4xl">Olá, eu sou o Renato 👋🏽</h1>
                            <p className=" text-md text-center lg:text-justify leading-[1.6] text-muted-foreground">Sou um desenvolvedor Full Stack apaixonado por transformar ideias em soluções digitais.
                                Aqui você vai encontrar alguns dos meus projetos mais recentes, onde aplico tecnologias modernas
                                no frontend e backend para criar aplicações web completas e funcionais.</p>
                        </div>
                        <figure className="flex items-center justify-center">
                            <img className=" bg-violet-300 flex items-center rounded-full w-48 h-48" src={avatar1} alt="" />
                        </figure>
                    </div>
                </section>

                <section className="w-full bg-muted p-3 lg:px-8 rounded-2xl">
                    <header className="mb-8">
                        <h2 className="inline-flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-border before:mr-2 before:rounded-full text-md font-bold text-muted-foreground">Projetos</h2>
                    </header>


                    <Accordion type="single" collapsible className="w-full">
                        <Card className="bg-card/90 mb-2">
                            <CardContent>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="items-center">
                                        <div className=" flex items-center gap-8">
                                            <img className="w-18 h-18 object-cover rounded-full" src={project1} alt="" />
                                            <p className=" font-bold text-primary text-md">Lenny E-commerce</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-col gap-8">
                                            <h1 className="font-bold text-2xl">Lenny E-commerce</h1>

                                            <p className=" leading-[1.6] text-justify lg:max-w-1/2 text-md text-muted-foreground font-normal">Landing Page feita para com propósito de simular um E-commerce. Nesse projeto utilizei apenas tecnologias Front-end, como: <span className=" font-bold text-violet-400">React</span>, <span className=" font-bold text-violet-400">Vite</span>, <span className=" font-bold text-violet-400">shadcn/ui</span>, <span className=" font-bold text-violet-400">Tailwind</span> e <span className=" font-bold text-violet-400">TypeScript</span>.</p>

                                            <a target="_blank" href="https://ecommerce-lyart-nu.vercel.app/" className="py-2 rounded-md font-bold px-4 w-fit bg-muted text-primary hover:bg-muted/80 cursor-pointer">Ver projeto</a>

                                            <img src={project1} alt="" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/90 mb-2">
                            <CardContent>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="items-center">
                                        <div className=" flex items-center gap-8">
                                            <img className="w-18 h-18 object-cover rounded-full" src={project2} alt="" />
                                            <p className=" font-bold text-primary text-md">Coffee Delivery</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-col gap-8">
                                            <h1 className="font-bold text-2xl">Coffee Delivery</h1>

                                            <p className=" leading-[1.6] text-justify lg:max-w-1/2 text-md text-muted-foreground font-normal">Nesse projeto utilizei apenas tecnologias Front-end, como: <span className=" font-bold text-violet-400">React</span>, <span className=" font-bold text-violet-400">Vite</span>, <span className=" font-bold text-violet-400">shadcn/ui</span>, <span className=" font-bold text-violet-400">Tailwind</span> e <span className=" font-bold text-violet-400">TypeScript</span>. O obejtivo final era simular um site/app de uma cafeteria até o momento do cliente finalizar a compra.</p>

                                            <a target="_blank" href="https://coffee-delivery-nine-phi.vercel.app/" className="py-2 rounded-md font-bold px-4 w-fit bg-muted text-primary hover:bg-muted/80 cursor-pointer">Ver projeto</a>

                                            <img src={project2} alt="" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/90 mb-2">
                            <CardContent>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="items-center">
                                        <div className=" flex items-center gap-8">
                                            <img className="w-18 h-18 object-cover rounded-full" src={project3} alt="" />
                                            <p className=" font-bold text-primary text-md">MaceioIN</p>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="flex flex-col gap-8">
                                            <h1 className="font-bold text-2xl">MaceióIN</h1>

                                            <p className=" leading-[1.6] text-justify lg:max-w-1/2 text-md text-muted-foreground font-normal">O MaceióIN foi desenvolvido usando tecnologias Front-end e Back-end, assim sendo um projeto Full-Stack. Ele foi um projeto proposto durante o período de testes técnicos para vaga de desenvolvedor web da SEFAZ Maceió. Tecnologias utilizadas nesse projeto: <span className=" font-bold text-violet-400">React</span>, <span className=" font-bold text-violet-400">Vite</span>, <span className=" font-bold text-violet-400">shadcn/ui</span>, <span className=" font-bold text-violet-400">Tailwind</span>, <span className=" font-bold text-violet-400">TypeScript</span> e <span className=" font-bold text-violet-400">Django Rest Framework</span>.</p>

                                            <a target="_blank" href="https://maceio-in.vercel.app/" className="py-2 rounded-md font-bold px-4 w-fit bg-muted text-primary hover:bg-muted/80 cursor-pointer">Ver projeto</a>

                                            <img src={project3} alt="" />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </CardContent>
                        </Card>

                    </Accordion>

                </section>
            </div>
        </div>
    )
}