import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false); // Default to false or appropriate server value

  useEffect(() => {
    // This effect runs only on the client after hydration
    const checkDevice = () => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Initial check
    checkDevice()

    // Listener for window resize
    window.addEventListener("resize", checkDevice)

    // Cleanup listener
    return () => window.removeEventListener("resize", checkDevice)
  }, []) // Empty dependency array ensures this runs once on mount

  return isMobile;
}
