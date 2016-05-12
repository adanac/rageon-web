package com.adanac.tool.rageon;

import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;


/**
 * Unit test for simple App.
 */
public class AppTest 
{
	
	@BeforeClass
    public void init(){
    	System.out.println("before class");
    }


    /**
     * Rigourous Test :-)
     */
	@Test
    public void testApp()
    {
		System.out.println("Test 1");
        assert true : "dfd";
    }
	@Test
    public void testApp1()
    {
		System.out.println("Test 2");
        assert( true );
    }
}
