"use client"

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { luxuriousScript } from '@/app/fonts';
import { useConvexAuth, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { authClient } from '@/lib/auth-client';

export default function Navbar() {
    const {isAuthenticated, isLoading} = useConvexAuth();
    const user = useQuery(api.auth.getCurrentUser);
  return (
    <div className='w-full absolute z-10'>
        
        <div className='flex justify-between p-4 lg:pt-6 lg:px-10'>

            <div className='mx-auto lg:mx-0 my-auto'>
                <p className={`${luxuriousScript.className} tracking-widest text-xl`}>Brand Name</p>
            </div>

            <div className='hidden lg:block'>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        
                        <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Link</NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

             <div>
                <div>

                    {isLoading ? null : isAuthenticated ? (
                       <div className='hidden lg:flex gap-3'>
                            <Button onClick={() => authClient.signOut({})}>Logout</Button>
                            <p>{user?.email || "No username"}</p>
                       </div>
                    ): (
                        <div className='hidden lg:flex gap-3'>
                            <Button variant="outline">
                                <Link href="/auth/sign-in">Sign In</Link>
                            </Button>
                            <Button variant="outline">
                                <Link href="/auth/sign-up">Get Started</Link>
                            </Button>
                        </div>
                    )}

                    
                    <div className='block lg:hidden'>
                        <Sheet>
                            <SheetTrigger>☰</SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>This action cannot be undone.</SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}
