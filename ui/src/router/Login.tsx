import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowCircleRight } from "@phosphor-icons/react";
import React, { HTMLAttributes, InputHTMLAttributes, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email('Deve ser um email válido'),
  password: z.string().min(3, 'Informe, pelo menos, 3 caracteres')
});

type LoginFormType = z.infer<typeof loginSchema>;

export function LoginPage() {

  const [ isLoading ] = useState(false);

  const { register, handleSubmit, formState: { errors }, formState } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema)
  });

  const submit = (data: LoginFormType) => {
    console.log(data);
  };

  return <div className="min-h-screen flex items-center justify-center">
  <div className="w-2/6 flex flex-col gap-8">
    <h1 className="text-center">
      <span className="font-semibold text-background bg-highlight px-6 py-2">Newsletter App</span>
    </h1>

    <h2 className="text-5xl font-extrabold text-center">Login</h2>

    <form className="flex flex-col gap-4" onSubmit={handleSubmit(submit)}>
      <Field>
        <Input type="text" placeholder="Seu email" { ... register("email") }/>

        { errors.email && <Error>{ errors.email?.message }</Error> }
      </Field>
      
      <Field>
        <Input type="password" placeholder="Senha" { ... register("password") }/>

        { errors.password && <Error>{ errors.password?.message }</Error> }
      </Field>

      <button type="submit" 
        disabled={(formState.isSubmitted && !formState.isValid) || isLoading}
        className="py-2 flex gap-4 justify-center items-center
        text-2xl uppercase font-semibold 
        bg-main focus:outline outline-highlight
        hover:scale-110 transition-all
        disabled:scale-100 disabled:bg-gray-500
        "
      >
        <ArrowCircleRight />
        Entrar
      </button>
    </form>
  </div>
</div>
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ... rest }, forwardRef) => {

  return <input { ... rest } ref={forwardRef}
    className="h-12 w-full text-background font-semibold px-2 hover:outline focus:outline outline-2 outline-highlight"
  />
});

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(({ children, ... rest }, forwardRef) => {

  return <div { ... rest } ref={forwardRef} 
    className="flex flex-col gap-1"
  >
    {children}
  </div>
});

interface ErrorProps extends HTMLAttributes<HTMLDivElement> {
  // errors: FieldErrors<LoginFormType>
}

const Error = React.forwardRef<HTMLDivElement, ErrorProps>(({ children, ... rest }, forwardRef) => {

  return <div { ... rest } ref={forwardRef} 
    className="text-red-500"
  >
    {children}
  </div>
});