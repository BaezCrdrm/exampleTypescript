export function sum(n1: number, n2: number): number
{
    return n1 + n2;
}

export function rest(n1: number, n2: number, name = ""): number
{
    if(name)
        console.warn(name);
    return n1 - n2;
}
